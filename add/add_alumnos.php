<?php
require('../conn.php');

$name = isset($_POST['name']) ? $_POST['name'] : '';
$active = isset($_POST['active']) ? intval($_POST['active']) : 0;
$image = '';

if (!empty($name) && isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
    $uploadDir = './uploads/';
    $uploadFile = $uploadDir . basename($_FILES['image']['name']);
    $imageFileType = strtolower(pathinfo($uploadFile, PATHINFO_EXTENSION));

    // Validar si es una imagen
    $check = getimagesize($_FILES['image']['tmp_name']);
    if ($check !== false) {
        // Validar el tipo de archivo (jpg, png, jpeg, gif)
        if (in_array($imageFileType, ['jpg', 'jpeg', 'png', 'gif'])) {
            // Mover el archivo subido al directorio de destino
            if (move_uploaded_file($_FILES['image']['tmp_name'], $uploadFile)) {
                $image = $uploadFile;

                // Insertar en la base de datos
                $query = "INSERT INTO alumnos (name, image, active) VALUES (:name, :image, :active)";
                $statement = $connect->prepare($query);
                $statement->bindParam(':name', $name, PDO::PARAM_STR);
                $statement->bindParam(':image', $image, PDO::PARAM_STR);
                $statement->bindParam(':active', $active, PDO::PARAM_INT);
                

                if ($statement->execute()) {
                    $response = array('status_code' => 200, 'message' => 'Alumno added successfully', 'id' => $connect->lastInsertId());
                } else {
                    $response = array('status_code' => 500, 'message' => 'Failed to add Alumno');
                }
            } else {
                $response = array('status_code' => 500, 'message' => 'Failed to upload image');
            }
        } else {
            $response = array('status_code' => 400, 'message' => 'Only JPG, JPEG, PNG & GIF files are allowed');
        }
    } else {
        $response = array('status_code' => 400, 'message' => 'File is not an image');
    }
} else {
    $response = array('status_code' => 400, 'message' => 'Invalid input or file upload error');
}

echo json_encode($response);
?>