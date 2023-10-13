function cargarImagen(input) {

    const imagenPerfil = document.getElementById('imagenPerfil');

    if (input.files && input.files[0]) {

        const reader = new FileReader();

        reader.onload = function (e) {

            imagenPerfil.src = e.target.result;
            
        };

        reader.readAsDataURL(input.files[0]);
    }
}