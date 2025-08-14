<?php
// Ativa exibição de erros (para debug)
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Inclui PHPMailer (versão 5.x compatível)
require 'PHPMailer/class.phpmailer.php';
require 'PHPMailer/class.smtp.php';

// Carrega variáveis do .env
$env = parse_ini_file(__DIR__ . '/.env');
if (!$env) {
    die("Erro: arquivo .env não encontrado.");
}

// Recebe dados do formulário
$nome    = $_POST['nome'] ?? '';
$email   = $_POST['email'] ?? '';
$assunto = $_POST['assunto'] ?? '';
$mensagem = $_POST['mensagem'] ?? '';

// Criação do objeto PHPMailer
$mail = new PHPMailer;
$mail->isSMTP();
$mail->SMTPAuth   = true;
$mail->Host       = $env['SMTP_HOST'];
$mail->Port       = $env['SMTP_PORT'];
$mail->Username   = $env['SMTP_USER'];
$mail->Password   = $env['SMTP_PASS'];
$mail->SMTPSecure = $env['SMTP_SECURE'];
$mail->SMTPOptions = [
    'ssl' => [
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    ]
];

// Remetente e destinatário
$mail->From     = $env['FROM_EMAIL'];
$mail->FromName = $env['FROM_NAME'];
$mail->addAddress($env['TO_EMAIL'], $env['TO_NAME']);

// Configurações do e-mail
$mail->isHTML(true);
$mail->Subject = "Formulário de Contato: $assunto";
$mail->Body    = "
<h2>Nova mensagem de contato</h2>
<p><strong>Nome:</strong> ".htmlspecialchars($nome)."</p>
<p><strong>E-mail:</strong> ".htmlspecialchars($email)."</p>
<p><strong>Assunto:</strong> ".htmlspecialchars($assunto)."</p>
<p><strong>Mensagem:</strong><br>".nl2br(htmlspecialchars($mensagem))."</p>
";
// Charset
$mailer->CharSet = 'UTF-8';

if ($mail->send()) {
    echo "ok"; // ou redirecionamento: header('Location: obrigado.html');
} else {
    echo "Erro ao enviar: " . $mail->ErrorInfo;
}
