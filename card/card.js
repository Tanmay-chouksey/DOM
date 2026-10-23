var tf = document.querySelector('#inner')
var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var grow = 0;

btn.addEventListener('click', function(){

    var num = 50 + Math.floor(Math.random()*50)
    console.log(num)
 var int = setInterval(() => {
        grow++;
        h1.innerHTML = grow + '%'
        btn.innerHTML = "Downloading"
        btn.style.opacity= 0.5
        btn.style.pointerEvents= "none";
        tf.style.width = grow + '%';
        
    }, num);
    
    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = "Downloaded"
    }, num*100);


})