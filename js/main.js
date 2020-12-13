function renderDescription(){
    var title = document.createElement('h3');
    title.innerText = descriptions[0][0] + ' ';
    document.getElementById("description").appendChild(title);

    var duracion = document.createElement('span');
    duracion.innerText = descriptions[0][1] + ' ';
    document.getElementById("description").appendChild(duracion);

    var timeIcon = document.createElement('i');
    timeIcon.classList.add('icofont-ui-clock');
    document.getElementById("description").appendChild(timeIcon);

    var description = document.createElement('p');
    description.innerText = descriptions[0][2];
    document.getElementById("description").appendChild(description);

    var trailer = document.createElement('a');
    trailer.innerText = "Ver trailer";
    document.getElementById("description").appendChild(trailer);

    var ver = document.createElement('a');
    ver.innerText = "Ver ahora";
    ver.id = 'ver';
    document.getElementById("description").appendChild(ver);
}