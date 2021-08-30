let arrayImage = [
    {animal: 'Horse', Image: 'horse.png'},
    {animal: 'Owl', Image: 'owl.png'},
    {animal: 'Wolf', Image: 'wolf.png'},
    {animal: 'Cat', Image: 'cat.png'},
    {animal: 'Dolphin', Image: 'dolphin.png'}
];
var i = 0;
function loadArray(){
    let name = document.getElementById('name');
    name.innerHTML =  arrayImage[i].animal;
    let currentyImage = document.getElementById('resu');
    currentyImage.innerHTML = ' <img src="'+arrayImage[i].Image+'" alt="image" id="img">';
}


function moveBackwards(){
    i--;
    if(i < 0){
        i = 4;
    }
    let name = document.getElementById('name');
    name.innerHTML =  arrayImage[i].animal;

    let currentyImage = document.getElementById('resu');
    currentyImage.innerHTML = ' <img src="'+arrayImage[i].Image+'" alt="image" id="img">';
}

function moveFoward(){
    i++;
    if(i>4){
        i = 0;
    }
    let name = document.getElementById('name');
    name.innerHTML =  arrayImage[i].animal;
    let currentyImage = document.getElementById('resu');
    currentyImage.innerHTML = ' <img src="'+arrayImage[i].Image+'" alt="image" id="img">';

}


 
