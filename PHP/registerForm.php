<?php

$firstName = $_POST['first-name'];
$lastName = $_POST['last-name'];
$email = $_POST['email'];
$password = $_POST['password'];
$gender = $_POST['gender'];

// informaiton to create database connection
$dbURL = "localhost";
$dbUser = "root";
$dbPassword = "";
$dbItself = "registeredUsers";


// create Connection object

$connection = mysqli_connect($dbURL, $dbUser, $dbPassword, $dbItself);

if($connection){
    echo "Connection created";
}

else{
    echo "Connection not created";
}


?>