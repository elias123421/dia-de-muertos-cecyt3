function mostrarInfo(elemento) {
    const display = document.getElementById('info-display');

    const datos = {
        'cempasuchil': 'Flor de Cempasúchil: Su color y aroma guían a las almas hacia el altar.',
        'veladora': 'Veladoras: La luz, fe y esperanza que ilumina el camino de regreso de las ánimas.',
        'pan': 'Pan de Muerto: Representa el ciclo de la vida y la muerte; la bolita superior representa el cráneo.',
        'papel': 'Papel Picado: Representa el aire, uno de los cuatro elementos indispensables en la ofrenda.',
        'calaverita': 'Calaveritas de azúcar/chocolate: Hacen alusión a la muerte siempre presente.'
    };

    if (datos[elemento]) {
        display.textContent = datos[elemento];
    } else {
        display.textContent = 'Selecciona un elemento válido.';
    }
}