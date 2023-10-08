 function llenarSelectDesdeAPI() {
            const selectEmpresa = document.getElementById('empresa');
            
            // URL de la API (reemplaza con la URL de tu API)
            const apiUrl = '/empresa';
            
            // Realiza una solicitud GET a la API
            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('No se pudo obtener la lista de empresas.');
                    }
                    return response.json();
                })
                .then(data => {
                    // Limpia el select
                    selectEmpresa.innerHTML = '<option value="">Seleccionar empresa</option>';
                    
                    // Llena el select con los datos de la API
                    data.forEach(empresa => {
                        const option = document.createElement('option');
                        option.value = empresa.codigoEmpresa; // Reemplaza con el valor adecuado
                        option.textContent = empresa.nombreEmpresa; // Reemplaza con el nombre adecuado
                        selectEmpresa.appendChild(option);
                    });
                })
                .catch(error => {
                   
                    console.error('Error al obtener la lista de empresas:', error);
                    document.getElementById("lblError").textContent = "¡¡Error de conexion a la Base de datos!!";
                    document.getElementById("lblError").style.visibility = "visible";
                    
                });
        }

        // Llama a la función para llenar el select cuando la página cargue
        window.onload = llenarSelectDesdeAPI;