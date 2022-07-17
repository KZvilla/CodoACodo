<?php
session_start();

$nombre = 'cristian';
$pass ='1234';
$_SESSION['iniciado']= "";
$_SESSION['nombre']= $nombre;
$_SESSION['password']= $nombre;

// session_destroy();