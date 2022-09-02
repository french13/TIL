// 캔버스 세팅
let canvas;
let ctx;

canvas = document.createElement("canvas")
ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);



let backgroundImage,spaceshipImage,bulletImage,enemyImage,gameOverImage;

let spaceshipX = canvas.width/2-30;
let spaceshipY = canvas.height-60

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
    })
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
}


function render(){
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY, 60, 60)
}

function main(){
    update();
    render();
    requestAnimationFrame(main);
}

loadImage();
main();
setupKeyboardListener();