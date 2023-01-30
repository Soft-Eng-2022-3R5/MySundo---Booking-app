<?php
  
  $servername = "localhost";
  $username = "root";
  $password = "";
  $databasename = "mysundo";
  
  // CREATE CONNECTION
  $conn = new mysqli($servername,
    $username, $password, $databasename);
  
  // GET CONNECTION ERRORS
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }
  
  // SQL QUERY
  $query = "SELECT * FROM `users` where email = 'robante@sample.com';";
  
  // FETCHING DATA FROM DATABASE
  $result = $conn->query($query);
  
    if ($result->num_rows > 0) 
    {
        // OUTPUT DATA OF EACH ROW
        while($row = $result->fetch_assoc())
        {
            echo "Roll No: " .
                $row["Roll_No"]. " - Name: " .
                $row["Name"]. " | City: " . 
                $row["City"]. " | Age: " . 
                $row["Age"]. "<br>";
        }
    } 
    else {
        echo "0 results";
    }
  
   $conn->close();
  
?>