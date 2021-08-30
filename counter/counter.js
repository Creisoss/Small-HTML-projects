let x = 0
function add(){
  
    let count = document.getElementById('counter')
     x++
    count.innerHTML = `${x}`;
}

function lower(){
   
    
    let count = document.getElementById('counter')
    x--
    count.innerHTML = `${x}`;
}

function clean(){
    let count = document.getElementById('counter')
    x = 0
   count.innerHTML = `${x}`;

}