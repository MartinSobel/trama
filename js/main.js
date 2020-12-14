function renderDescription(){
    if(document.getElementById("description")){
        document.body.removeChild(document.getElementById("description"));
    }

    let div = document.createElement('div');
    document.body.appendChild(div);
    div.id = "description";

    let descriptionText = document.createElement('div');
    div.appendChild(descriptionText);
    descriptionText.id = "descriptionText";

    let randomNum = Math.floor((Math.random() * 10) + 1);

    let title = document.createElement('h3');
    title.id = 'title';
    title.innerText = descriptionsES[randomNum][0] + ' ';
    document.getElementById("descriptionText").appendChild(title);

    let duracion = document.createElement('span');
    duracion.innerText = descriptionsES[randomNum][1] + ' ';
    document.getElementById("descriptionText").appendChild(duracion);

    let timeIcon = document.createElement('i');
    timeIcon.classList.add('icofont-ui-clock');
    document.getElementById("descriptionText").appendChild(timeIcon);

    let description = document.createElement('p');
    description.innerText = descriptionsES[randomNum][2];
    document.getElementById("descriptionText").appendChild(description);

    let ver = document.createElement('i');
    ver.classList.add('icofont-play-alt-2');
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

    let info = document.createElement('div');
    div.appendChild(info);
    info.id = "info";

    let regresar = document.createElement('a');
    regresar.innerText = 'Regresar';
    regresar.id = 'regresar';
    regresar.addEventListener('click', function(){
        document.body.removeChild(document.getElementById("episode"));
    });
    document.getElementById("info").appendChild(regresar);

    let title = document.createElement('h2');
    title.innerText = descriptionsES[randomNum][0];
    title.id = 'episodeTitle'
    document.getElementById("info").appendChild(title);

    let description = document.createElement('p');
    description.innerText = descriptionsES[randomNum][2];
    document.getElementById("info").appendChild(description);

    let video = document.createElement('video');
    video.width = '1000';
    video.controls = true;
    video.controlsList = "nodownload";
    let source = document.createElement('source');
    source.src = 'https://www.w3schools.com/html/mov_bbb.mp4';
    video.appendChild(source);
    document.getElementById("episode").appendChild(video);
}