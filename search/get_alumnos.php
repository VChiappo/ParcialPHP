<?php
require('../conn.php');
$query = "SELECT * FROM alumnos";

$statement = $connect->prepare($query);

$statement->execute();

$result = $statement->fetchAll();

if ($result) {
    $data['data']['status_code'] = 200;
    
    foreach ($result as $row) {
        $data['data']['alumnos'][] = array(
            'id'   => $row["id"],
            'name'   => $row["name"],
            'image'   => "./add/".$row["image"],
            'active' => $row["active"]
        );
    }
    
    echo json_encode($data);
} else {
    $data = array(
        'status' => 401
    );
    echo json_encode($data);
}
?>
