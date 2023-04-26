<?php
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'thesltscrapbook@gmail.com';
    $subject = "Message from $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/plain\r\n";

    $mailSent = mail($to, $subject, $message, $headers);

    if ($mailSent) {
      header('Content-Type: application/json');
      echo json_encode(['message' => 'Email sent successfully']);
    } else {
      http_response_code(500);
      header('Content-Type: application/json');
      echo json_encode(['message' => 'Internal server error']);
    }
  }
?>
