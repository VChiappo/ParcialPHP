function getAlumnosByid(id) {
    fetch(`./search/get_alumnos_by_id.php?id=${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.status_code === 200) {
          const alumnos = data.alumnos;
          document.getElementById('edit-id').value = alumnos.id;
          document.getElementById('edit-name').value = alumnos.name;
          if (alumnos.active === "0") {
            document.getElementById('edit-active').checked = false;
          } else {
            document.getElementById('edit-active').checked = alumnos.active;
          }

          document.getElementById('modal-id').textContent = alumnos.id;

        } else {
          console.error('alumno not found');
        }
      })
      .catch(error => console.error('Error fetching alumno', error));
  }