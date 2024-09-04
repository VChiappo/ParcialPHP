function getAlumnos() {
  fetch('./search/get_alumnos.php')
    .then(response => response.json())
    .then(data => {
      if (data.status_code === 200) {  // Accede directamente a 'status_code'
        const alumnos = data.alumnos;  // Accede directamente a 'alumnos'
        const tableBody = document.getElementById('alumnos-table-body');
        tableBody.innerHTML = '';

        alumnos.forEach((alumno, index) => {
          const row = document.createElement('tr');
          const active = alumno.active === "1";  // Simplificación de la verificación

          row.innerHTML = `
              <th scope="row">${index + 1}</th>
              <td>${alumno.name}</td>
              <td><img src="${alumno.image}" alt="Imagen de ${alumno.name}" width="50"></td>
              <td>${active ? 'Activo' : 'Inactivo'}</td>
              <td><i class="material-icons btn-edit" data-id="${alumno.id}" style="color:#000;cursor:pointer;font-size:30px;margin-left:35px;" data-bs-toggle="modal" data-bs-target="#editModal" onclick="getAlumnoById('${alumno.id}')">edit</i></td>
              <td><i class="material-icons btn-delete" data-id="${alumno.id}" style="color:#000;cursor:pointer;font-size:30px;margin-left:35px;" data-bs-toggle="modal" data-bs-target="#deleteModal" onclick="confirmDelete('${alumno.id}')">delete</i></td>
              `;

          tableBody.appendChild(row);
        });
      } else {
        console.error('Error al cargar los datos:', data.message);
      }
    })
    .catch(error => console.log('Error en la solicitud:', error));
}
