<?php
$conn = mysqli_connect('localhost', 'root', '');
$database = mysqli_select_db($conn, 'mysundo');

$encodedData = file_get_contents('php://input');  // take data from react native fetch API
$decodedData = json_decode($encodedData, true);

$user_id = $decodedData['user_id'];


$SQL = "SELECT * FROM book WHERE user_id = '$user_id'";
$exeSQL = mysqli_query($conn, $SQL);
$checkUserId =  mysqli_num_rows($exeSQL);

if ($checkUserId != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['user_id'] != $user_id) {
        $Message = "false";
    } else {
        $Message = "true";
    }
} else {
    $Message = "false";
}

$response[] = array("Message" => $Message);
echo json_encode($response);