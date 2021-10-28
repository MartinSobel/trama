// window.addEventListener('click', function(e){
//     if(! this.document.getElementById('description').contains(e.target)){
//         document.body.removeChild(document.getElementById("description"));
//     }
// })

function renderDescription(d){
    if(document.getElementById("description")){
        document.body.removeChild(document.getElementById("description"));
    }

    let div = document.createElement('div');
    document.body.appendChild(div);
    div.id = "description";


    let descriptionText = document.createElement('div');
    div.appendChild(descriptionText);
    descriptionText.id = "descriptionText";

    // let randomNum = Math.floor((Math.random() * 10) + 1);
    let randomNum = d; 

    let title = document.createElement('h3');
    title.id = 'title';
    title.innerText = descriptionsES[randomNum][0] + ' ';
    document.getElementById("descriptionText").appendChild(title);

    let duracion = document.createElement('h4');
    duracion.innerText = descriptionsES[randomNum][1] + ' ';
    document.getElementById("descriptionText").appendChild(duracion);

    // let timeIcon = document.createElement('i');
    // timeIcon.classList.add('icofont-ui-clock');
    // document.getElementById("descriptionText").appendChild(timeIcon);

    let description = document.createElement('p');
    description.innerText = descriptionsES[randomNum][2];
    document.getElementById("descriptionText").appendChild(description);

    let buttons = document.createElement('div')
    buttons.id = 'buttonsContainer'
    document.getElementById('description').appendChild(buttons);

    let ver = document.createElement('span');
    ver.innerText = "VER EPISODIO"
    // ver.classList.add('icofont-play-alt-2');
    ver.id = 'ver';
    ver.addEventListener('click', function(){
        renderEpisode(randomNum);
    });
    document.getElementById('buttonsContainer').appendChild(ver);

    let closeBtn = document.createElement('a')
    closeBtn.innerText = 'cerrar'
    closeBtn.id = 'closeBtn'
    buttons.appendChild(closeBtn)
    closeBtn.addEventListener('click', function(){
        document.body.removeChild(document.getElementById("description"));
    });

    let trailer = document.createElement('img');
    trailer.src = descriptionsES[randomNum][3];
    trailer.id = 'trailer';
    document.getElementById('description').appendChild(trailer);
}

function renderEpisode(randomNum){
    let nav = document.getElementById('nav');
    nav.style.display = 'none';

    let div = document.createElement('div');
    document.body.appendChild(div);
    div.id = "episode";

    let info = document.createElement('div');
    div.appendChild(info);
    info.id = "info";

    let regresar = document.createElement('a');
    regresar.innerText = '< Regresar';
    regresar.id = 'regresar';
    regresar.addEventListener('click', function(){
        document.body.removeChild(document.getElementById("episode"));
        nav.style.display = 'inherit';
    });
    document.getElementById("info").appendChild(regresar);

    let title = document.createElement('h2');
    title.innerText = descriptionsES[randomNum][0];
    title.id = 'episodeTitle'
    document.getElementById("info").appendChild(title);

    let description = document.createElement('p');
    description.innerText = descriptionsES[randomNum][2];
    description.id = 'episodeDescription';
    document.getElementById("info").appendChild(description);

    let ficha = document.createElement('p');
    ficha.innerText = descriptionsES[randomNum][5];
    ficha.id = 'episodeFicha'
    document.getElementById("info").appendChild(ficha);

    let iframe = document.createElement('div');
    iframe.innerHTML = descriptionsES[randomNum][4];
    document.getElementById("episode").appendChild(iframe);
    iframe.classList.add('video')
}