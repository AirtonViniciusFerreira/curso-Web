<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <h1>Olá mundo</h1>
    </div>
    <div>
        <h2>
        <?php 
            echo("Oiii :):):)");
            $num = 150;
            $x = 500.99;;
            echo("<br/> valor:");
            print($num);
            if($num > 200){
                echo("<br/> valor:");
                print($x + $num);
            }else{
                echo ("<br/> Vishhh");
            }
            
        ?>
        </h2>
    </div>
    <div>
        <h2>Tudo bem?</h2>
    </div>  
    <ul>
        <li><a href="par.php?num=1">UM é par?</a></li>
        <li><a href="par.php?num=2">Dois é par?</a></li>
        <li><a href="par.php?num=3">Três é par?</a></li>
        <li><a href="par.php?num=4">Quatro é par?</a></li>
        <li><a href="par.php?num=5">Cinco é par?</a></li>
        <li>
            <form action="par.php" method="GET">
                <input type="text" id="num" name="num">
                <button type="submit" >Enviar </button>
            </form>
        </li>
    </ul>
</body>
</html>