
<?php 
$connection = mysqli_connect('localhost','root','','trabajo') or die(mysqli_error($mysqli));

insertar($connection);

function insertar($connection){
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$usuario = $_POST['usuario'];
$contraseña = $_POST['contraseña'];
$correo = $_POST['correo'];

$consulta = "INSERT INTO usuarios(nombre, apellido, usuario, contraseña, correo)
VALUES ('$nombre','$apellido','$usuario','$contraseña','$correo')";
mysqli_query($connection, $consulta);
mysqli_close($connection);

}

?>