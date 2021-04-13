<?php

$recepient = "tka4uk.gt41@yandex.ru";   /*куда принимать письма*//*переменная*/
$siteName = "AutoExpress";                 /*название сайта*//*переменная*/

$name = trim($_POST["name"]);           /*name из input в html*/
$phone = trim($_POST["phone"]);			/*name из input в html*/
$message = "Имя: $name \nТелефон: $phone";  /*то-что в письме*/

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");   /*отправить*/

?>