//variáveis bolinha:
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let r = diametro/2;

//variáves raquete:
let xRaquete = 5;
let yRaquete = 170;
let raqWidth = 10;
let raqHeight = 80;

//variáveis oponente:
let xOponente = 585;
let yOponente = 170;
let opoWidth = 10;
let opoHeight = 80;

//variáveis velocidade:
let velX = 6;
let velY = 6;

//placares:
let meusPontos = 0;
let oponentePontos = 0;

//sons do jogo:
let raquetada;
let ponto;
let trilha;

//---------------------------------------

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(color(34,158,143));
  mostraBolinha();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xOponente, yOponente);
  movimentoBolinha();
  movimentoRaquete();
  movimentoOponente();
  colisaoBorda();
  colisaoRaquete();
  colisaoOponente();
  incluirPlacar();
  pontuar();
}

//MOSTRAR
function mostraBolinha(){
    circle(xBolinha,yBolinha,diametro);
}

function mostraRaquete(x, y){
    rect(x, y , raqWidth, raqHeight);
}

//function mostraOponente(){
    //rect(xOponente, yOponente, opoWidth, opoHeight) }

//MOVIMENTO
function movimentoBolinha(){
    xBolinha += velX;
    yBolinha += velY;
}

function movimentoRaquete(){
    if (keyIsDown(87)){
      yRaquete -= 10;  }
    if (keyIsDown(83)){
      yRaquete += 10;  }
}

function movimentoOponente(){
    if (keyIsDown(UP_ARROW)){
      yOponente -= 10;  }
    if (keyIsDown(DOWN_ARROW)){
      yOponente += 10;  }
    //yOponente = yBolinha - 50
}

//COLISÃO 
function colisaoBorda(){
    if (xBolinha + r >= width || xBolinha - r <= 0){
        velX *= -1;  }
    if (yBolinha + r >= height || yBolinha - r <= 0){
        velY *= -1;  }
}

function colisaoRaquete(){
    if (xBolinha - r <= xRaquete + raqWidth && yBolinha - r <= yRaquete + raqHeight && yBolinha + r >= yRaquete) {
      velX *= -1;
      raquetada.play();}
}

function colisaoOponente(){
    if (xBolinha >= xOponente - opoWidth && yBolinha <= yOponente + opoHeight && yBolinha + r >= yOponente) {
      velX *= -1;
      raquetada.play();}
}

function incluirPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16); 
  fill(color(255,140,0));
  rect(85, 10, 30, 20);
  fill(255);
  text(meusPontos, 100, 26);
  fill(color(255,140,0));
  rect(485,10, 30, 20);
  fill(255);
  text(oponentePontos, 500, 26);
}

function pontuar(){
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }else if (xBolinha < 10){
    oponentePontos += 1;
    ponto.play();
  } 
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}