function getAlumnos() {
    fetch('./search/get_alumnos.php')
      .then(response => response.json())
      .then(data => {
        if (data.data && data.data.status_code === 200) {
          const alumnos = data.data.alumnos;
          const tableBody = document.getElementById('alumnos-table-body');
          tableBody.innerHTML = '';

          alumnos.forEach((alumnos, index) => {
            const row = document.createElement('tr');
            var active = false
            if (alumnos.active === "0") {
              active = false
            } else {
              active = true
            }
            row.innerHTML = `
                <th scope="row">${index + 1}</th>
                <td>${alumnos.name}</td>
                <td><img src="${alumnos.image}" alt="image of ${alumnos.image}" width="50"></td>
                <td>${active ? 'Activo' : 'Inactivo'}</td>
                <td><i class="material-icons btn-edit" data-id="${alumnos.id}" style="color:#000;cursor:pointer;font-size:30px;margin-left:35px;" data-bs-toggle="modal" data-bs-target="#editModal" onclick="getAlumnosByid('${alumnos.id}')">edit</i></a> </td>
                <td><i class="material-icons btn-delete" data-id="${alumnos.id}" style="color:#000;cursor:pointer;font-size:30px;margin-left:35px;" data-bs-toggle="modal" data-bs-target="#deleteModal" onclick="confirmDelete('${alumnos.id}')">delete</i></a> </td>
          
                `;

            tableBody.appendChild(row);
          });
        } else {
          console.error('Error al cargar los datos');
        }
      })
      .catch(error => console.log('Error en la solicitud:', error));
      //console.log(error)
  }
  //});