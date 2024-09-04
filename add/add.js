function addAlumnos() {
    const name = document.getElementById('add_name').value;
    const image = document.getElementById('add_image').files[0];
    const active = document.getElementById('add_active').checked ? 1 : 0;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);
    formData.append('active', active);

    fetch('./add/add_alumnos.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.status_code === 200) {
                addedSuccessAlert()

                const addModal = bootstrap.Modal.getInstance(document.getElementById('addModal'));
                addModal.hide();

                getAlumnos()
                document.getElementById('add_name').value = "";
                document.getElementById('add_image').value = "";
                document.getElementById('add_active').checked = false;

            } else {
                console.error(data.status_code)
                genericErrorAlert()
            }
        })

}