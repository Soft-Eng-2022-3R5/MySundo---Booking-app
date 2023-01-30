<?php
	$CN = mysqli_connect("localhost","root","");
	$DB=mysqli_select_db($CN,"mysundo");
	
	$EncodedData = file_get_contents('php://input');
	$DecodedData = json_decode ($EncodedData,true);


	$user_id = $DecodedData ['user_id'];
	$booking_type= $DecodedData ['booking_type'];
	$pickup_location= $DecodedData ['pickup_location'];
	$dropoff_location= $DecodedData ['dropoff_location'];
	$someone_fullname= $DecodedData ['someone_fullname'];
	$someone_contact_no= $DecodedData ['someone_contact_no'];
	$type_vehicle= $DecodedData ['type_vehicle'];
	$payment_method= $DecodedData ['payment_method'];
	$note= $DecodedData ['note'];
	$price= $DecodedData ['price'];
	$date_created= $DecodedData ['date_created'];
	$pickup_date= $DecodedData ['pickup_date'];
	$pickup_time= $DecodedData ['pickup_time'];
	$status= $DecodedData ['status'];
	
	$IQ="insert into book(user_id,booking_type,pickup_location,dropoff_location,someone_fullname,someone_contact_no,type_vehicle,payment_method,note,price,date_created,pickup_date,pickup_time,status) 
	values('$user_id','$booking_type','$pickup_location','$dropoff_location','$someone_fullname','$someone_fullname','$type_vehicle','$payment_method','$note','$price','$date_created','$pickup_date','$pickup_time','$status')";

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