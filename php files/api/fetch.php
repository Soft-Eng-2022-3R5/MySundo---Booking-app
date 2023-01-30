<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "mysundo";

// Create connection
$conn = new mysqli($host, $user, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$encodedData = file_get_contents('php://input');  // take data from react native fetch API
$decodedData = json_decode($encodedData, true);

$email = $decodedData['email'];

$sql = "SELECT * FROM user where email = '$email'";
$result = $conn->query($sql);

$data = array();
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    echo "0 results";
}

// Encode the data as a JSON string
$json = json_encode($data);

// Set the content type to JSON
header('Content-Type: application/json');

// Output the JSON string
echo $json;

$conn->close();
?>