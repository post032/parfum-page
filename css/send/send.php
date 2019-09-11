<?php
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $name = htmlspecialchars($name);
  $phone = htmlspecialchars($phone);
  $name = urldecode($name);
  $phone = urldecode($phone);
  $name = trim($name);
  $phone = trim($phone);
  if (mail("адрес получателя", "Заявка с сайта", "ФИО:".$name.". телефон: ".$phone ,"From: адрес-отправки \r\n"))
   {     echo "сообщение успешно отправлено";
  } else {
      echo "при отправке сообщения возникли ошибки";
}?>
