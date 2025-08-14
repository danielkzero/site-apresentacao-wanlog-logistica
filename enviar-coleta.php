<?php

// visualizar erros
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'PHPMailer/PHPMailerAutoload.php';
require 'PHPMailer/class.phpmailer.php';

$mailer = new PHPMailer;

//carregar as variáveis do .env
$env = parse_ini_file(__DIR__ . '/.env');

// Recebe dados do POST
$form = $_POST;

// Cria o corpo do e-mail
$mensagem = "<h2>Nova Cotação de Frete</h2>";
foreach ($form as $campo => $valor) {
    $mensagem .= "<b>" . htmlspecialchars($campo) . ":</b> " . htmlspecialchars($valor) . "<br>";
}

// Configuração SMTP
$mailer->isSMTP();
$mailer->SMTPAuth = true;
$mailer->Host = $env['SMTP_HOST'];
$mailer->Port = $env['SMTP_PORT'];
$mailer->Username = $env['SMTP_USER'];
$mailer->Password = $env['SMTP_PASS'];
$mailer->SMTPSecure = $env['SMTP_SECURE'];
$mailer->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
// Configuração remetente
$mailer->From = $env['FROM_EMAIL'];
$mailer->FromName = $env['FROM_NAME'];
// Configuração destinatário
$mailer->addAddress($env['TO_EMAIL'], $env['TO_NAME']);
// Conteúdo do e-mail
$mailer->isHTML(true);
$mailer->Subject = 'Nova Cotação de Frete';
$mailer->Body = $mensagem;
// Charset
$mailer->CharSet = 'UTF-8';

// Envio do e-mail
if (!$mailer->send()) {
    echo "Erro ao enviar: " . $mailer->ErrorInfo;
} else {
    echo "ok"; // Resposta de sucesso
}
