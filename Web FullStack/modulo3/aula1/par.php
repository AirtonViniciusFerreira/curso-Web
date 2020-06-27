<?php

$num = $_GET['num'];

if($num % 2 ==0){
    echo "O número $num é par";
}else{
    echo "O número $num é impar";
}