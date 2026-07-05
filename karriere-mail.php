<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('Content-Security-Policy: default-src \'none\'');
header('Referrer-Policy: strict-origin-when-cross-origin');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Honeypot
if (!empty($_POST['website'])) {
    echo json_encode(['success' => true, 'message' => 'Vielen Dank für Ihre Bewerbung!']);
    exit;
}

/**
 * Strip newlines to prevent email header injection.
 */
function sanitize(string $value): string
{
    return trim(str_replace(["\r", "\n", "\0"], '', strip_tags($value)));
}

// Collect and validate inputs
$name       = sanitize($_POST['name']       ?? '');
$email      = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone      = sanitize($_POST['phone']      ?? '');
$position   = sanitize($_POST['position']   ?? '');
$startdate  = sanitize($_POST['startdate']  ?? '');
$motivation = trim(strip_tags($_POST['motivation'] ?? ''));

$allowed_positions = [
    'LWL-Spleißer / Glasfasermonteur (m/w/d)',
    'Initiativbewerbung',
];

// Validate position against whitelist
if (!in_array($position, $allowed_positions, true)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Ungültige Stellenauswahl.']);
    exit;
}

// Length limits
if (
    mb_strlen($name)       > 100  ||
    mb_strlen($phone)      > 50   ||
    mb_strlen($position)   > 100  ||
    mb_strlen($startdate)  > 50   ||
    mb_strlen($motivation) > 5000 ||
    ($email !== false && mb_strlen($email) > 254)
) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Ein Feld überschreitet die maximal erlaubte Länge.']);
    exit;
}

if (empty($name) || !$email || empty($motivation)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Bitte füllen Sie alle Pflichtfelder aus.']);
    exit;
}

// Configuration
const ADMIN_EMAIL  = 'info@infradim.de';
const SENDER_EMAIL = 'noreply@infradim.de';
const SENDER_NAME  = 'Infradim';
const COMPANY_LINE = 'Infradim | Kabelmontage, Tiefbau & Netzwerktechnik';
const COMPANY_ADDR = 'info@infradim.de | infradim.de | Nürnberg';

// ── 1. Confirmation e-mail to the applicant ───────────────────────────────────

$user_subject = '=?UTF-8?B?' . base64_encode('Ihre Bewerbung bei Infradim – wir haben sie erhalten') . '?=';

$user_body  = "Guten Tag {$name},\r\n\r\n"
            . "vielen Dank für Ihre Bewerbung bei Infradim!\r\n"
            . "Wir haben Ihre Unterlagen erhalten und werden uns zeitnah bei Ihnen melden.\r\n\r\n"
            . "Ihre Bewerbung:\r\n"
            . str_repeat('-', 60) . "\r\n"
            . "Stelle:        {$position}\r\n"
            . ($startdate  ? "Frühestmöglich: {$startdate}\r\n"  : '')
            . ($phone      ? "Telefon:        {$phone}\r\n"       : '')
            . "\r\nAnschreiben:\r\n"
            . wordwrap($motivation, 72, "\r\n") . "\r\n"
            . str_repeat('-', 60) . "\r\n\r\n"
            . "Mit freundlichen Grüßen\r\n"
            . "Ihr Infradim-Team\r\n\r\n"
            . "---\r\n"
            . COMPANY_LINE . "\r\n"
            . COMPANY_ADDR . "\r\n";

$user_headers = implode("\r\n", [
    'From: ' . SENDER_NAME . ' <' . SENDER_EMAIL . '>',
    'Reply-To: ' . ADMIN_EMAIL,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: PHP/' . PHP_VERSION,
]);

mail($email, $user_subject, $user_body, $user_headers);

// ── 2. Notification e-mail to the admin ──────────────────────────────────────

$admin_subject = '=?UTF-8?B?' . base64_encode("[Bewerbung] {$position} – {$name}") . '?=';

$admin_body  = "Neue Bewerbung über karriere.infradim.de:\r\n\r\n"
             . "Name:           {$name}\r\n"
             . "E-Mail:         {$email}\r\n"
             . ($phone     ? "Telefon:        {$phone}\r\n"      : '')
             . "Stelle:         {$position}\r\n"
             . ($startdate ? "Frühestmöglich: {$startdate}\r\n"  : '')
             . "\r\nAnschreiben:\r\n"
             . str_repeat('-', 60) . "\r\n"
             . wordwrap($motivation, 72, "\r\n") . "\r\n"
             . str_repeat('-', 60) . "\r\n\r\n"
             . 'Eingegangen am: ' . date('d.m.Y \u\m H:i') . " Uhr\r\n";

$admin_headers = implode("\r\n", [
    'From: ' . SENDER_NAME . ' <' . SENDER_EMAIL . '>',
    'Reply-To: ' . sanitize($name) . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: PHP/' . PHP_VERSION,
]);

$sent = mail(ADMIN_EMAIL, $admin_subject, $admin_body, $admin_headers);

if ($sent) {
    echo json_encode([
        'success' => true,
        'message' => 'Vielen Dank für Ihre Bewerbung! Wir melden uns in Kürze bei Ihnen.',
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Es ist ein Fehler aufgetreten. Bitte senden Sie Ihre Bewerbung direkt an info@infradim.de.',
    ]);
}
