var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;


var dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green'
        ctx.fillRect(this.x , this.y,  this.width , this.height);
    }
}





// 장애물은 많이 필요하므로 뽑아내는 constructor 를 만들어서 사용
class Cactus {
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x , this.y,  this.width , this.height);
    }
}

let cactus = new Cactus();
cactus.draw();







// 프레임마다 실행
var timer = 0;
var 점프timer = 0;
let cactuss =[];
var animation;

function Frame(){
  let animation = requestAnimationFrame(Frame);
    ctx.clearRect(0,0, canvas.width,canvas.height);
    timer++;


    if (timer % 120 === 0){
        var cactus = new Cactus();
        cactuss.push(cactus);
       
    }
    cactuss.forEach((a,i,o)=>{
        if(a.x < 0){
        o.splice(i,1)
        }
        

        a.x--;

        충돌기능(dino, a);
        a.draw();

        
    })

    if(점프중 == true){
        dino.y --;
        점프timer++;
    }

    if(점프timer > 100){
        점프중 = false;

        dino.y++;
        if(dino.y >200){
            dino.y = 200
            점프timer = 0;
        }

    }

    dino.draw();

}

Frame();

var 점프중 = false;

document.addEventListener('keydown', function(e){
    if(e.code === 'Space'){
     점프중 = true;
    }

})

function 충돌기능(dino, cactus){
    var x축차이 = cactus.x - (dino.x+dino.width);
    var y축차이 = cactus.y - (dino.y+dino.height);

    if(x축차이 < 0 && y축차이 < 0){

        ctx.clearRect(0,0, canvas.width,canvas.height);
        cancelAnimationFrame(animation);
    }
}


