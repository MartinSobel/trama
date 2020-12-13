function renderDescription(){
    // Borrar el div primero
    let randomNum = console.log(Math.floor((Math.random() * 10) + 1));

    let title = document.createElement('h3');
    title.innerText = descriptions[0][0] + ' ';
    document.getElementById("description").appendChild(title);

    let duracion = document.createElement('span');
    duracion.innerText = descriptions[0][1] + ' ';
    document.getElementById("description").appendChild(duracion);

    let timeIcon = document.createElement('i');
    timeIcon.classList.add('icofont-ui-clock');
    document.getElementById("description").appendChild(timeIcon);

    let description = document.createElement('p');
    description.innerText = descriptions[0][2];
    document.getElementById("description").appendChild(description);

    let trailer = document.createElement('a');
    trailer.innerText = "Ver trailer";
    document.getElementById("description").appendChild(trailer);

    let ver = document.createElement('a');
    ver.innerText = "Ver ahora";
    ver.id = 'ver';
    document.getElementById("description").appendChild(ver);
}