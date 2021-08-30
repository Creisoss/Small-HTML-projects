function User(name,stars,msg,img){
    this.name = name
    this.stars = stars
    this.msg = msg
    this.img = img
}


var user ='Jorge'
var stars = '★★★★★'
var msg = ' I liked it, it was awesome!'
var img = document.createElement('img')
img.src = 'suitguy1.jpg'
var User0 = new User(user,stars,msg,img)

user ='Lucas'
stars = '★★★'
msg = 'I felt that it can improve a lot!'
img = document.createElement('img')
img.src = 'suitguy2.jpg'
var User1 = new User(user,stars,msg,img)

user ='Marcos'
stars = '★★★★'
msg = 'It was just like i was expecting!'
img = document.createElement('img')
img.src = 'suitguy3.jpg'
var User2 = new User(user,stars,msg,img)

users = [User0,User1,User2]
var i = 0;

function load(){
   var name = document.getElementById('name')
   var stars = document.getElementById('stars')
   var msg = document.getElementById('msg')
   var img = document.getElementById('image')
   name.innerHTML = users[i].name
   stars.innerHTML = users[i].stars
   msg.innerHTML = users[i].msg
   img.src = users[i].img.src
}

function foward(){
    i++
    if (i > 2){
        i = 0
    }
    load()
}
function backward(){
    i--
    if (i < 0){
        i = 2
    }
    load()
}
