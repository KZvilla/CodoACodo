<?php
include 'conexion.php';
    //eliminar registro.
    //usando DELETE from 'LaTabla' where 'id_usuarios = 1' por ejemplo
$id = $_GET['id'];
$consuta_eliminar = "DELETE from usuarios where id_usuarios=$id";
$resultado = mysqli_query($conexion, $consuta_eliminar);

if ($resultado) {
    echo "</br>";
    echo "<h1>Se elimino el Registro</h1>";
    header('Location: http://localhost/php2022/proyecto/IntegradorFront-Back/admin.html');
} else {
    echo "No se elimino";
}