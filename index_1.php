<?php
//Calcular las compras
$postres=9.00;
$cafes=2.00;
$B_Frias=4.00;
$B_Calientes=5.00;
$igv=0.08;

$cantidad1=$_REQUEST['cantidad1'];
$precio1=$cantidad1*$postres;
$pago_igv1=$precio1*$igv;
$pagofinal=$precio1+$pago_igv1;
echo"El pago de Postres sin IGV seria S/".$precio1."<br>";
echo"El pago de Postres seria S/".$pagofinal."<br>"."<br>";


$cantidad2=$_REQUEST['cantidad2'];
$precio2=$cantidad2*$cafes;
$pago_igv2=$precio2*$igv;
$pagofinal=$precio2+$pago_igv2;
echo"El pago de Cafes sin IGV seria S/".$precio2."<br>";
echo"El pago de Cafes seria S/".$pagofinal."<br>"."<br>";


$cantidad3=$_REQUEST['cantidad3'];
$precio3=$cantidad3*$B_Frias;
$pago_igv3=$precio3*$igv;
$pagofinal=$precio3+$pago_igv3;
echo"El pago de Bebidas Frias sin IGV seria S/".$precio3."<br>";
echo"El pago de Bebidas Frias seria S/".$pagofinal."<br>"."<br>";


$cantidad4=$_REQUEST['cantidad4'];
$precio4=$cantidad4*$B_Calientes;
$pago_igv4=$precio4*$igv;
$pagofinal=$precio4+$pago_igv4;
echo"El pago de Bebidas Calientes sin IGV seria S/".$precio4."<br>";
echo"El pago de Bebidas Calientes seria S/".$pagofinal."<br>"."<br>";

?>