var tf = document.querySelector('#inner')
var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var grow = 0;

btn.addEventListener('click', function(){

 setInterval(() => {
        grow++;
        h1.innerHTML = grow + '%'
        btn.innerHTML = "Downloaded"
        btn.style.opacity= 0.5
        btn.style.pointerEvents= "none";
        tf.style.width = grow  + '%'
        
    }, 500);



})