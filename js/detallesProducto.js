function mostrarDetalles(id) {
    const detalles = document.getElementById(id + '-detalles');

    if (detalles.style.display === 'none') {
        detalles.style.display = 'block';
    } else {
        detalles.style.display = 'none';
    }
}