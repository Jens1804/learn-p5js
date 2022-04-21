/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

let canvasWidth = 600;
let canvasHeight = 600;

let captain;
let thor;
let ironman;
let heroes = [captain, thor, ironman];
let loki;
let thanos;
let ultron;
let villains = [loki, ultron, thanos];
let hero = 0;
let villain;
let world;

function preload() {
  captain = new Person("captain", true, false);
  ironman = new Person("ironman", true, false);
  thor = new Person("thor", true, false);

  loki = new Person("loki", false, true);
  ultron = new Person("ultron", false, true);
  thanos = new Person("thanos", false, true);

  thanos.observePersons([ultron, loki, captain, ironman, thor]);
  loki.observePersons([thanos, ultron, captain, ironman, thor]);
  ultron.observePersons([thanos, loki, captain, ironman, thor]);
  captain.observePersons([thanos, ultron, loki, ironman, thor]);
  ironman.observePersons([thor, ultron, loki, captain, thor]);
  thor.observePersons([thanos, ultron, loki, captain, ironman]);

  world = new World("Marvel Universe");
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  hero = 0;
}

function switchHero() {
  switch (hero) {
    case 0: {
      ironman.setActive();
      captain.setInActive();
      thor.setInActive();
      ironman.move();
      ironman.draw();
      break;
    }
    case 1: {
      captain.setActive();
      ironman.setInActive();
      thor.setInActive();
      captain.move();
      captain.draw();
      break;
    }
    case 2: {
      thor.setActive();
      ironman.setInActive();
      captain.setInActive();
      thor.move();
      thor.draw();
      break;
    }
  }
}

function draw() {
  background(255, 255, 255, 255);
  world.move();
  world.draw();

  line(25, 100, canvasWidth - 25, 100);
}

function mousePressed() {
  if (hero < heroes.length - 1) {
    hero++;
  } else {
    hero = 0;
  }
  switchHero();
}

function draw3() {
  background(255, 255, 255, 255);
  world.move();
  world.draw();

  line(700, 300, canvasWidth - 25, 100);
}
