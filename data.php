<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "delivery";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Під'єднання не вдалося: " . $conn->connect_error);
}

$name = $_POST['name'];
$number = $_POST['number'];
$street = $_POST['street'];
$floor = $_POST['floor'];
$intercom = $_POST['intercom'];

$sql = "INSERT INTO delivery_info (name, number, street, floor, intercom) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $name, $number, $street, $floor, $intercom);


if ($stmt->execute()) {

} else {
    echo "Помилка: " . $sql . "<br>" . $conn->error;
}

$stmt->close();
$conn->close();
?>