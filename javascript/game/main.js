// 캔버스 세팅
let canvas;
let ctx;

canvas = document.createElement("canvas")
ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);



let backgroundImage,spaceshipImage,bulletImage,enemyImage,gameOverImage;
let gameOver=false //true면 게임이 끝남

let score = 0;

let spaceshipX = canvas.width/2-30;
let spaceshipY = canvas.height-60

let bulletList = [];

function Bullet(){
    this.x=0;
    this.y=0;
    this.init=function(){
        this.x = spaceshipX+18
        this.y = spaceshipY-25
        this.alive=true // false면죽은 총알
        bulletList.push(this);
    }
    this.update = function(){
        this.y -= 7;
    };
    this.checkHit=function(){
        for(let i =0; i<enemyList.length; i++){
            if(this.y <= enemyList[i].y && this.x >= enemyList[i].x && this.x <= enemyList[i].x+64 ){
                score++;
                this.alive = false;
                enemyListDeath.push(i)
                enemyList.splice(i,1)
                console.log(enemyListDeath)
            }else if (this.y <66){
                this.alive = false;
            }
        }
       
    }
}


function generateRandomValue(min,max){
    let randomNum = Math.floor(Math.random()*(max-min+1))+min
    return randomNum
}


let enemyList = []
let enemyListDeath = []
function Enemy(){
    this.x=0;
    this.y=0;
    this.init = function(){
        this.y = 0;
        this.x = generateRandomValue(0, canvas.width-64);
        enemyList.push(this)
    }
    this.update = function(){
        this.y +=2;

    if (this.y >= 700){
        gameOver =true;
        console.log('gameover')
    }
    }
}

function loadImage(){
    backgroundImage = new Image();
    backgroundImage.src="images/game-bg.jpg";

    spaceshipImage = new Image();
    spaceshipImage.src="images/spaceship.png";

    bulletImage = new Image();
    bulletImage.src = "images/bullet.png";

    enemyImage = new Image();
    enemyImage.src="images/enemy.png";

    gameOverImage = new Image();
    gameOverImage.src="images/gameover.png"
}



let keysDown={};

function setupKeyboardListener(){
    document.addEventListener("keydown", function(event){
        keysDown[event.key] = true;
    });
    document.addEventListener("keyup", function(event){
        delete keysDown[event.key];

        if(event.key == "z"){
            createBullet()  //총알생성
        }
    });
}

function createBullet(){
    console.log('총알생성');
    let b = new Bullet;
    b.init();
}

function createEnemy(){
    const interval = setInterval(function(){
        let e = new Enemy()
        e.init()
    }, 2000)
}


function update(){
    if( 3 in keysDown){
        spaceshipX += 6;  // 우주선의 오른쪽 속도
    } //right
    if( 1 in keysDown){
        spaceshipX -= 6; // 우주선의 왼쪽 속도
    } //left
    if( 5 in keysDown){
        spaceshipY -=6; // 우주선의 위로 가는 속도
    } //up
    if( 2 in keysDown){
        spaceshipY +=6; // 우주선의 위로 가는 속도
    } //down

    if(spaceshipX <= 0){  // 왼쪽 이동공간 제한
        spaceshipX = 0 ;    
    }
    if(spaceshipX >= 340) { // 오른쪽 이동공간 제한
        spaceshipX = 340
    }
    if(spaceshipY >= 670) {
        spaceshipY = 670
    }
    for(let i = 0; i < bulletList.length; i++) {
        if(bulletList[i].alive){
            bulletList[i].update();
            bulletList[i].checkHit();
        }
       
    }
    for(let i =0; i<enemyList.length; i++){
        enemyList[i].update();
    }
}


function render(){
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY, 60, 60);
    ctx.fillText(`Score:${score}`, 20, 20);
    ctx.fillStyle="white";
    for(let i=0; i<bulletList.length; i++){
        if(bulletList[i].alive){
            ctx.drawImage(bulletImage, bulletList[i].x, bulletList[i].y, 24 , 24)
        }
        
    }
    for(let i=0; i<enemyList.length; i++){
        ctx.drawImage(enemyImage, enemyList[i].x, enemyList[i].y, 64, 64)
}
}

function main(){
    if(gameOver == false){
    update();
    render();
    requestAnimationFrame(main);
}   else {
    ctx.drawImage(gameOverImage, 10 , 100, 380, 380)
}
}

loadImage();
setupKeyboardListener();
createEnemy();
main();