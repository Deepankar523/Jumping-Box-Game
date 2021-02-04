var canvas;
var music;
var box, surface1, surface2, surface3, surface4, edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    var surface1 = createSprite(150,550,150,25);
    surface1.shapeColor="red";
    var surface2 = createSprite(300,550,150,25);
    surface2.shapeColor="blue";
    var surface3 = createSprite(450,550,150,25);
    surface3.shapeColor="yellow";
    var surface4 = createSprite(600,550,150,25);
    surface4.shapeColor="green";
    //create box sprite and give velocity
    var box = createSprite(400,100,20,20);
    box.x=random(150,600);
    box.shapeColor="white";
    box.velocityY=4;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();

    //add condition to check if box touching surface and make it box
    drawSprites();
}
