<?php
// Nos conectamos con el metodo mysqli_connect
require 'conexion.php';
//Recuperar lo cargado en el formulario.
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$categoria = $_POST['categoria'];
//Insertamos los valores
$sqlinsert = "INSERT INTO usuarios (id_usuarios, nombre, apellido, correo, telefono) VALUES (NULL,'$nombre','$apellido','$correo','$telefono')";
$insert = mysqli_query($conexion, $sqlinsert);
header('Location: http://localhost/php2022/proyecto/IntegradorFront-Back/registro.html');
