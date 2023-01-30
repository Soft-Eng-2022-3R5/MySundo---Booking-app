<?php
	$CN = mysqli_connect("localhost","root","");
	$DB=mysqli_select_db($CN,"mysundo");
	
	$EncodedData = file_get_contents('php://input');
	$DecodedData = json_decode ($EncodedData,true);


	// $user_id=$DecodedData ['user_id'];
	$email = $DecodedData ['email'];
	$password= $DecodedData ['password'];
	$first_name= $DecodedData ['first_name'];
	$last_name= $DecodedData ['last_name'];
	$home_address= $DecodedData ['home_address'];
	$province= $DecodedData ['province'];
	$city= $DecodedData ['city'];
	$gender= $DecodedData ['gender'];
	$birthdate= $DecodedData ['birthdate'];
	$age= $DecodedData ['age'];
	$weight= $DecodedData ['weight'];
	$cellphone_no= $DecodedData ['cellphone_no'];
	
	$IQ="insert into user(email,password,first_name,last_name,home_address,province,city,gender,birthdate,age,weight,cellphone_no) 
	values('$email','$password','$first_name','$last_name','$home_address','$province','$city','$gender','$birthdate','$age','$weight','$cellphone_no')";

	$R=mysqli_query($CN, $IQ);

	 if($R)
	 {
		$Message="Registered Successfully!";
	 }
	 else
	 {
		$Message="error";

	 }
	 $Responese[]=array("Message"=>$Message);
	 echo json_encode($Responese);
	
?>