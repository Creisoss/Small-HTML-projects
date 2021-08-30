//this function insert the data
let numArray = [];
function analyzer(){
    let num = document.getElementById("num");
    let resu = document.getElementById('result')
    let  i = 0;
    let tf = false;
    let result = document.getElementById("resu");
    result.innerHTML = [];
    document.getElementById("sec").style.height ="250px"
    if(num.value.length == 0){
        window.alert("Type a number before pressing the submit button");

    }else{
        if(Number(num.value > 100 || Number(num.value) <= 0)){
            window.alert("Type a valid number!!!")
        }else{
            while(i < numArray.length){
                if(numArray[i] == Number(num.value)){
                    tf = true;
                    i = numArray.length;
                }else{
                    i++;
                }
            }
            if(tf == true){
                window.alert("This number is already in it")
            }else{
                numArray.push([Number(num.value)]);
                let item = document.createElement('option');
                let lastIndex =  numArray.length-1
                item.text = 'You just added '+numArray[lastIndex];
                resu.append(item);
                
    }}}

}
//this function clean everything 
function clean(){
    document.getElementById("sec").style.height ="250px"
    let resu = document.getElementById("resu");
    let re = document.getElementById("result")
    numArray = [];
    resu.innerHTML = [];
    re.innerHTML = [];
}
//this function analyze the data
function end(){
    if (numArray.length == 0){
        window.alert('Type a number before analyze!')
    }else{
    document.getElementById("sec").style.height ="500px"
    let sum = Number(); 
    let max = numArray[0];
    let min = numArray[0];
    let c = 0;
    while(c < numArray.length){
            if (numArray[c] >= max){
                max = numArray[c];
            }
            if(numArray <= min){
                min = numArray[c];
            }
            c++;
    }
        for(let i = 0;i < numArray.length;i++){
            sum += Number(numArray[i]);
        } 
        let mean = sum/numArray.length;
        let item = document.createElement('p');
        let resu = document.getElementById('resu');
        let itemP = [];
        
        
        itemP.push(item.innerHTML = `the mean is: ${mean}`);
        itemP.push(item.innerHTML = `the max is: ${max}`);
        itemP.push(item.innerHTML = `the min is: ${min}`);
        itemP.push(item.innerHTML = `the sum of all elements is: ${sum}`);
        itemP.push(item.innerHTML = `you typed ${numArray.length} numbers`);
        for(let x = 0;x < 5 ;x++){
            resu.append(itemP[x]);
            resu.innerHTML += '<br>';
        }

    }
}

