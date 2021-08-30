function dataColector(){
    var date = new Date();
    var now = date.getFullYear();
    var age = Number(now-parseInt(window.document.getElementById('age').value));
    var male = Boolean;
    var female = Boolean;

    if(document.getElementById('male').checked == true){
        male = true;
        female = false;
    } 
    else if(document.getElementById('female').checked == true){
        female = true;
        male = false;  
    }

    var result = window.document.getElementById('result');
    if (age < 0 || age > 120){
        result.innerHTML = '<br>[ERROR] Invalid data.....<br>TRY AGAIN!!!!';
    }else if(age >= 0 && age < 4){
      switch(male){
          case true:
              result.innerHTML = "<br>It's a male baby!<br> <img id = 'img' alt='image' >";
              var img = window.document.getElementById('img');
              img.src = 'babyEdit.png';
            break;
          case false:
              result.innerHTML = "<br>It's a female baby!<br> <img id = 'img' alt='image'>";
              var img = window.document.getElementById('img');
              img.src = 'babyfEdit.png';
            break;
       }
    }else if(age >= 4 && age < 14){
        switch(male){
            case true:
                result.innerHTML = "<br>It's a boy!<br> <img id = 'img' alt='image'>";
                var img = window.document.getElementById('img');
                img.src = 'boyEdit.png';
              break;
            case false:
                result.innerHTML = "<br>It's a girl!<br> <img id = 'img' alt='image'>";
                var img = window.document.getElementById('img');
                img.src = 'girlEdit.png';
              break;
        }
    }else if(age >= 14 && age < 18){
        switch(male){
            case true:
                result.innerHTML = "<br>It's a male teenager!<br> <img id = 'img' alt='image'>";
                var img = window.document.getElementById('img');
                img.src = 'teenEdit.png';
              break;
            case false:
                result.innerHTML = "<br>It's a female teenager!<br> <img id = 'img' alt='image'>";
                var img = window.document.getElementById('img');
                img.src = 'teenfEdit.png';
              break;
        }
    }else if(age >= 18 && age < 25){
        switch(male){
            case true:
                result.innerHTML = "<br>It's an young man!<br> <img id = 'img' alt='image'>";
                var img = window.document.getElementById('img');
                img.src = 'youngadultEdit.png';
              break;
            case false:
                result.innerHTML = "<br>It's an young woman!<br>  <img id = 'img' alt='image'> ";
                var img = window.document.getElementById('img');
                img.src = 'youngadultfEdit.png';
              break;
        }
    }else if(age >= 25 && age < 60){
        switch(male){
            case true:
                result.innerHTML = "<br>It's a man!<br>  <img id = 'img' alt='image'>";
                var img = window.document.getElementById('img');
                img.src = 'grownEdit.png';
              break;
            case false:
                result.innerHTML = "<br>It's a womam!<br>  <img id = 'img' alt='image'>";
                var img = window.document.getElementById('img');
                img.src = 'grownfEdit.png';
              break;
        }
    }else if(age >= 60){
        switch(male){
            case true:
                result.innerHTML = "<br>It's an old man!<br>  <img id = 'img' alt='image'>";
                var img = window.document.getElementById('img');
                img.src = 'oldEdit.png';
              break;
            case false:
                result.innerHTML = "<br>It's an old womam!<br>  <img id = 'img' alt='image'>";
                var img = window.document.getElementById('img');
                img.src = 'oldfEdit.png';
              break;
        }
    }           
}



