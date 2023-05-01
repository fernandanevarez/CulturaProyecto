<?php
$usuario = $_POST['usuario'];
$clave = $_POST['clave'];

$connection = mysqli_connect("localhost", "root", "", "trabajo");
$consulta = "SELECT * FROM usuarios WHERE usuario = '$usuario' AND clave = '$clave'";
$resultado = mysqli_query($connection,$consulta);

$filas = mysqli_num_rows($resultado);
if ($filas > 0){
	header("location:Iniciar Sesion.html");
}else {echo "Error";
}
mysqli_free_result($resultado);
mysqli_close($connection);

?>