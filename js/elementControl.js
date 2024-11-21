function randomColor(id){
    let element = document.getElementById(id);
    let letters = '01234567890ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    element.style.backgroundColor = color;
    
}

function setInvisible(id){
    let element = document.getElementById(id);
    element.style.visibility = 'hidden';
}