function paragrafos(){
    const divParagrafos = document.querySelector('.div-paragrafos');
    const paragrafos = divParagrafos.querySelectorAll('p');

    const bodyStyles = getComputedStyle(document.body);
    const backgroundColorBody = bodyStyles.backgroundColor;

    console.log(backgroundColorBody);

    for (const paragrafo of paragrafos) {
        console.log(paragrafo);
        paragrafo.style.backgroundColor = backgroundColorBody;
        paragrafo.style.color = "#FFFFFF";       
    }
}

paragrafos();