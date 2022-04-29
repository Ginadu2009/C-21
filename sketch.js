var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;
var music;

function preload(){
    // carregue o som aqui
    music = loadSound("music.mp3");
}

function setup(){
    tela = createCanvas(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    bloco3 = createSprite(495,580,160,30);
    bloco3.shapeColor = "green";

    bloco4 = createSprite(695,580,160,30);
    bloco4.shapeColor = "yellow";


    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    bola.velocityX = 5
    bola.velocityY = 5

}

function draw() {
    background(rgb(169,169,169));
    arestas=createEdgeSprites();
    bola.bounceOff(arestas);

    
    //escreva o código de ricochete de bola para bloco1 
    if(bloco1.isTouching(bola)){
        bola.shapeColor = "blue";
        music.play();
    }


    if(bloco2.isTouching(bola)){
        bola.shapeColor = "orange";
        music.play();
    }

    //escreva o código de ricochete de bola para bloco3
    if(bloco3.isTouching(bola)){
        bola.shapeColor = "green";
        music.play();}

    //escreva o código de ricochete de bola para bloco4
    if(bloco4.isTouching(bola)){
        bola.shapeColor = "yellow";
        music.play();}
    
    drawSprites();
    }