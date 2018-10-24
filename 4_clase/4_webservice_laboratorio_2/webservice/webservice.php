<?php
	$action = $_POST['action']; //

	if ($action == "addProduct") 
		addProduct();
	else if ($action == "getProducts")
		getProducts();

	function connect() {  //Código necesario para conectar la BD 
		$databasehost = "localhost";
		$databasename = "midb";
		$databaseuser = "root";
		$databasepass = "root";

		$mysqli = new mysqli($databasehost, $databaseuser, $databasepass, $databasename);
		if ($mysqli->connect_errno) {
			echo "Problema con la conexion a la base de datos";
		}
		return $mysqli;
	}

	function disconnect() {
		mysqli_close();
	}

	function addProduct() {
		$name = $_POST["name"];
		$detail = $_POST["detail"];
		$price = $_POST["price"];

		$mysqli = connect();
		
		$result = $mysqli->query("INSERT INTO product(p_name, p_detail, p_price ) values('".$name."','".$detail."',".$price.")");
		
		if (!$result) {
			echo "Problema al hacer un query: " . $mysqli->error;								
		} else {
			echo "Todo salio bien";		
		}
		mysqli_close($mysqli);
	}

	function getProducts() {
		$mysqli = connect();

		$result = $mysqli->query("SELECT * FROM product");	
		
		if (!$result) {
			echo "Problema al hacer un query: " . $mysqli->error;								
		} else {
			// Recorremos los resultados devueltos
			$rows = array();
			while( $r = $result->fetch_assoc()) {
				$rows[] = $r;
			}			
			// Codificamos los resultados a formato JSON y lo enviamos al HTML (Client-Side)
			echo json_encode($rows);
		}
		mysqli_close($mysqli);		
	}
?>