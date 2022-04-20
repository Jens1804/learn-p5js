class World {
  constructor(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  move() {
    thanos.move();
    loki.move();
    ultron.move();
    thor.move();
    ironman.move();
    captain.move();
  }

  draw() {
    textSize(30);
    text(this.title, 25, 50);
    textSize(10);
    thanos.draw();
    loki.draw();
    ultron.draw();
    thor.draw();
    ironman.draw();
    captain.draw();
  }
}
