let dx;
let dy;
let vel;
let px;
let py;
let obj;
let tmp;

function inicia(){
    dx=0;
    dy=0;
    px=0;
    py=0;
    vel=10;
    obj=document.getElementById("canhaum");
    document.addEventListener("keydown",teclaDw)
    document.addEventListener("keyup",teclaUp)
    tmp=setInterval(enterframe,20);
}

function teclaDw(event){
    let tecla=event.key;
    if(tecla === "ArrowLeft"){
       
        dx -= 10;
    }else if(tecla === "ArrowUp"){
        dy=-1;
    }else if(tecla ==="ArrowRight"){
        dx=1;
    }else if(tecla ==="ArrowDown"){
        dy=-1;
    }
}
// function teclaUp(event){
//     let tecla=event.key;
//     if(tecla === "ArrowLeft"){
        
//         dx=0;
//     }else if(tecla === "ArrowUp"){
//         dy=0;
//     }else if(tecla ==="ArrowRight"){
//         dx=0;
//     }else if(tecla ==="ArrowDown"){
//         dy=0;
//     }
// } 


function enterframe(){
    px+=dx*vel;
    py+=dy*vel;
    obj.style.left=px+"px";
    obj.style.top=py+"px";

}    


window.addEventListener("load",inicia);


