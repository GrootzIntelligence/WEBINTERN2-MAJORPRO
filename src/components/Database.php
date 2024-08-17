n<?php
echo "Welcome to the stage where we are ready to get connnected to a database";
$servername= "localhost";
$username= "root";
$password= "";
$dbname="khushi";


$conn = mysqli_connect($servername,$username,$password,$dbname);

if(!$conn){
    die("sorry we Failed to connect:". mysqli_connect_error());
}
else{
echo "Connection was successful";
}
?>