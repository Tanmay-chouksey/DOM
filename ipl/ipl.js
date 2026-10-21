var btn = document.querySelector('button')
var box = document.querySelector('#box')
var arr = [
    {
        team: 'CSK'
    },
     {
        team: 'RCB'
    },
     {
        team: 'KKR'
    },
     {
        team: 'MI'
    }
]

btn.addEventListener('click',function(){
    var a = arr[Math.floor(Math.random()*arr.length)]
    box.innerHTML = a.team
    // box.style.backgroundColor = yellow
})