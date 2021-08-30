function load(){
    var text = window.document.getElementById('txt');
    var img = window.document.getElementById('photo');
    var time = new Date();
    var hours = time.getHours();
  
   
    if(hours >= 0 && hours < 12){
        //good morning
        text.innerHTML = `Good morning<br>Now it's ${hours}AM`;
        document.body.style.background = '#e2cd9f';
        img.src="morningedit.png";
        

    }else if(hours >= 12 && hours <18 ){
        //good afternoon
        text.innerHTML = `Good afternoon<br>Now it's ${hours}PM`;
        document.body.style.background = '#ff4500';
        img.src='editafternoon.png';


        }else{
            //good night
            text.innerHTML = `Good night<br>Now it's ${hours}PM`;
            document.body.style.background = '#555555';
            img.src ='nightedit.png';

    }
}


