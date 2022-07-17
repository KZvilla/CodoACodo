<?php
include 'conexion.php';
    //editar registro.
    //usando UPDATE laTabla SET nombre = "miguel" where id_usuarios =1
$id = $_POST["id"];
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$correo = $_POST["correo"];
$telefono = $_POST["telefono"];
$consulta_editar = "UPDATE usuarios SET nombre = '$nombre', apellido = '$apellido', correo = '$correo', telefono = '$telefono' where id_usuarios=$id";
$resultado = mysqli_query($conexion, $consulta_editar);

if ($resultado) {
    echo "</br>";
    echo "Se edito el registro";
    header('Location: http://localhost/php2022/proyecto/IntegradorFront-Back/admin.html');
} else {
    echo "No se edito";
}
