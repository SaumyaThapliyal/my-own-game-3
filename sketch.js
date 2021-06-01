var bg_img,tile_img,ball_img,sound;
var soundPlay = 0;
var count = 0,tileCount = 0;
var tile,ball;

var tileGroup;

function preload(){
bg_img = loadImage("images/BG 4.jpg");
tile_img = loadImage("images/TILE.png");
ball_img = loadImage("images/BALL.png");
sound = loadSound("BUTTER.mp3");

}

function setup(){
    createCanvas(500,700);

    ball = createSprite(width/2,600);
    ball.addImage(ball_img);
    ball.scale = 0.25;

    tileGroup = new Group();

    
    

}

function draw(){
    background(bg_img);

    if (mouseY > 300){
        ball.x = mouseX;
        ball.y = mouseY;
   }

   if (soundPlay == 0){
    for(var s = 0;s<tileGroup.length; s++){
        if (tileGroup.get(s).isTouching (ball)){
         sound.play();
         soundPlay = 1;
        }
    }
}
for(var s = 0;s<tileGroup.length; s++){
    if (tileGroup.get(s).isTouching (ball)){
     count += 1;
    }
}

    drawTile();

    console.log (count);

    drawSprites();
}


function drawTile(){
    if(frameCount%50 == 0){
        tile = createSprite(250,320);
        tile.addImage("tile_image",tile_img);
        tile.scale = 0.1;
        tile.x = random(220,280);
        tile.velocityY = 3;
        tileGroup.add(tile);
        ball.depth = tile.depth+1;

        tile.lifeTime = 500;

        tileCount += 1;
        
    }

    for(var i = 0;i<tileGroup.length; i++){

        for(var j = 340; j<680; j = j+5){
            if(tileGroup.get(i).y>= j){
                tileGroup.get(i).scale = 0.1+(j-325)/500;
               
            }

            if(tileGroup.get(i).x<240){
                tileGroup.get(i).x-= 0.003;
            }

            if(tileGroup.get(i).x>240){
                tileGroup.get(i).x+= 0.003;
            }
        }

    }
    
}
