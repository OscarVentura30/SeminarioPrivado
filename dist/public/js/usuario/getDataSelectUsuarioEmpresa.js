async function llenarSelectEmpresa() 
{
    const selectEmpresa = document.getElementById('empresaUsuario');
    const apiUrl = '/empresa';
    
    await fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo obtener la lista de empresas.');
            }
            return response.json();
        })
        .then(data => {
            
            selectEmpresa.innerHTML = '<option value="">Seleccionar empresa</option>';
            
            
            data.forEach(empresa => {
                const option = document.createElement('option');
                option.value = empresa.codigoEmpresa; 
                option.textContent = empresa.nombreEmpresa; 
                selectEmpresa.appendChild(option);
            });
        })
        .catch(error => {
           
            console.error('Error al obtener la lista de empresas:', error);
            
        });

    const SelectPuesto = document.getElementById('puestoUsuario');
    const api = '/api/listaUsurioPuesto';
    
    await fetch(api)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo obtener la lista de puestos.');
            }
            return response.json();
        })
        .then(data => {
            
            SelectPuesto.innerHTML = '<option value="">Seleccionar puestos</option>';
            
            
            data.forEach(puesto => {
                const option = document.createElement('option');
                option.value = puesto.Codigo; 
                option.textContent = puesto.Puesto; 
                SelectPuesto.appendChild(option);
            });
        })
        .catch(error => {
            
            console.error('Error al obtener la lista de puestos:', error);
            
        });

    const SelectDep = document.getElementById('DepUsuario');
    const apiDep = '/api/listaUsurioDepartemanto';
    
    await fetch(apiDep)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo obtener la lista de departamentos.');
            }
            return response.json();
        })
        .then(data => {
            
            SelectDep.innerHTML = '<option value="">Seleccionar departamento</option>';
            
            
            data.forEach(dep => {
                const option = document.createElement('option');
                option.value = dep.Codigo; 
                option.textContent = dep.departamento; 
                SelectDep.appendChild(option);
            });
        })
        .catch(error => {
            
            console.error('Error al obtener la lista de departamento:', error);
            
        });
}

window.onload = llenarSelectEmpresa;