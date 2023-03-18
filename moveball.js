let container=document.getElementById('container');
var ball=document.getElementById('ball');
var moveby=50;


document.addEventListener('keydown',function(event){
    if(event.key=="ArrowLeft"){
       moveleft();
    }
    if(event.key=="ArrowRight"){
        moveright();
    }
    if(event.key=="ArrowUp"){
        moveup();
    }
    if(event.key=="ArrowDown"){
        movedown();
    }

})

function moveleft(){
    let cor=parseInt(window.getComputedStyle(ball).getPropertyValue('left'))
    if(cor > 0){
        ball.style.left= cor - moveby +"px";
    }
}

function moveright(){
    let cor=parseInt(window.getComputedStyle(ball).getPropertyValue('left'))
    if(cor < 450){
        ball.style.left= cor + moveby +"px";

    }
}
function moveup(){
    let cor=parseInt(window.getComputedStyle(ball).getPropertyValue('top'))
    if(cor > 0){
        ball.style.top= cor- moveby +"px";
    }
}
function movedown(){
    let cor=parseInt(window.getComputedStyle(ball).getPropertyValue('top'))
    if(cor < 450){
        ball.style.top= cor + moveby +"px";
    }
}