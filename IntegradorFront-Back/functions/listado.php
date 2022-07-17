<?php
require 'conexion.php';
$consultas = mysqli_query($conexion, "SELECT * from usuarios");
?>
<?php
$usuario = $_POST["user"];
$pass =$_POST["pass"];
  if ($usuario =="admin" && $pass == "1234") {
      echo "</br>";
      echo "<h3>Bienvenido admin</h3>";
    include "formadmin.php";

  } else {
      echo "</br>";
      echo "<h3>usuario no permitido</h3>";
  }
?>
