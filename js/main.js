function renderDescription(){
    // Borrar el div
    if(document.getElementById("description")){
        document.body.removeChild(document.getElementById("description"));
    }

    // Genera el div
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.id = "description";

    let randomNum = Math.floor((Math.random() * 10) + 1);

    let title = document.createElement('h3');
    title.id = 'title';
    title.innerText = descriptionsES[randomNum][0] + ' ';
    document.getElementById("description").appendChild(title);

    let duracion = document.createElement('span');
    duracion.innerText = descriptionsES[randomNum][1] + ' ';
    document.getElementById("description").appendChild(duracion);

    let timeIcon = document.createElement('i');
    timeIcon.classList.add('icofont-ui-clock');
    document.getElementById("description").appendChild(timeIcon);

    let description = document.createElement('p');
    description.innerText = descriptionsES[randomNum][2];
    document.getElementById("description").appendChild(description);

    let ver = document.createElement('button');
    ver.innerText = "Ver";
    ver.id = 'ver';
    // ver.addEventListener('click', console.log('aa'));
    document.getElementById("description").appendChild(ver);

    let trailer = document.createElement('img');
    trailer.src = descriptionsES[randomNum][3];
    trailer.id = 'trailer';
    document.getElementById('description').appendChild(trailer);
}

function renderEpisode(randomNum){
    
}