function renderDescription(){
    if(document.getElementById("description")){
        document.body.removeChild(document.getElementById("description"));
    }

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
    ver.addEventListener('click', function(){
        renderEpisode(randomNum);
    });
    document.getElementById('description').appendChild(ver);

    let trailer = document.createElement('img');
    trailer.src = descriptionsES[randomNum][3];
    trailer.id = 'trailer';
    document.getElementById('description').appendChild(trailer);
}

function renderEpisode(randomNum){
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.id = "episode";

    let regresar = document.createElement('a');
    regresar.innerText = 'Regresar';
    regresar.id = 'regresar';
    regresar.addEventListener('click', function(){
        document.body.removeChild(document.getElementById("episode"));
    });
    document.getElementById("episode").appendChild(regresar);

    let title = document.createElement('h2');
    title.innerText = descriptionsES[randomNum][0];
    title.id = 'episodeTitle'
    document.getElementById("episode").appendChild(title);

    let description = document.createElement('p');
    description.innerText = descriptionsES[randomNum][2];
    document.getElementById("episode").appendChild(description);

    let video = document.createElement('video');
    video.width = '1000';
    video.controls = true;
    let source = document.createElement('source');
    source.src = 'https://www.w3schools.com/html/mov_bbb.mp4';
    video.appendChild(source);
    document.getElementById("episode").appendChild(video);
}