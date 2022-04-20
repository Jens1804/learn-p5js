class Person {
  constructor(character, isHero, autoMove) {
    this.height = 100;
    this.width = 100;
    this.name = character;
    this.image = loadImage(`../pictures/${character}.png`);
    this.autoMove = autoMove;
    this.moveRight = true;
    this.moveDown = true;
    this.speedMin = 1;
    this.speedMax = 3;
    this.speed = random(this.speedMin, this.speedMax);

    this.active = false;
    this.isHero = isHero;

    this.x = random(100, 400);
    this.y = random(100, 400);

    this.center = { x: this.x + this.width / 2, y: this.y + this.height / 2 };
    this.observedPersons = [];
    this.distances = [];
  }

  setActive() {
    this.active = true;
  }
  setInActive() {
    this.active = false;
  }

  observePersons(persons) {
    let counter = 0;
    for (let person of persons) {
      counter = this.observedPersons.push(person);
    }
  }

  drawObservedPersonsLines() {
    for (let person of this.observedPersons) {
      line(this.center.x, this.center.y, person.center.x, person.center.y);
    }
  }

  computeDistances() {
    let counter = 0;
    textSize(10);
    for (let person of this.observedPersons) {
      this.distances[counter] = dist(
        this.center.x,
        this.center.y,
        person.center.x,
        person.center.y
      );
      counter++;
    }
  }

  drawDistances() {
    let counter = 0;
    textSize(10);
    for (let person of this.observedPersons) {
      if (this.distances[counter] < 100) {
        fill(255, 0, 0, 255);
      } else if (this.distances[counter] < 200) {
        fill(255, 100, 0, 255);
      } else {
        fill(0, 0, 0, 255);
      }
      text(
        counter + ". " + person.name + ": " + this.distances[counter],
        this.x + this.width + 10,
        this.y + counter * 15
      );
      counter++;
    }
  }

  getImage() {
    return this.image;
  }

  getName() {
    return this.name;
  }

  moveVariante02() {
    start = { x: this.x, y: this.y };
    ziel = { x: this.x, y: this.y };

    borderTop = 150;
    borderRight = canvasWidth;
    orderBottom = canvasHeight;
    borderLeft = 1;
    moveDown = true;
    moveRight = true;
    zielOk = false;
    //rechts raus
    while (!zielOk) {}
    if (ziel.x + this.width >= borderRight) {
      moveRight = false;
    }

    //unten raus
    //links raus
    //oben raus
  }

  moveVariante01() {
    if (this.autoMove) {
      if (this.moveRight) {
        if (this.center.x < canvasWidth - 50) {
          this.x++;
        } else {
          this.x--;
          this.moveRight = false;
        }
      } else {
        if (this.center.x > 50) {
          this.x--;
        } else {
          this.x++;
          this.moveRight = true;
        }
      }

      if (this.moveDown) {
        if (this.center.y < canvasHeight - 50) {
          this.y++;
        } else {
          this.y--;
          this.moveDown = false;
        }
      } else {
        if (this.center.y > 170) {
          this.y--;
        } else {
          this.y++;
          this.moveDown = true;
        }
      }
    } else {
      if (this.active) {
        if (mouseX < 1) {
          this.x = 1;
        } else if (mouseX > canvasWidth - this.width) {
          this.x = canvasWidth - this.width;
        } else {
          this.x = mouseX;
        }

        if (mouseY < 170 - this.height / 2) {
          this.y = 170 - this.height / 2;
        } else if (mouseY > canvasHeight - this.height) {
          this.y = canvasHeight - this.height;
        } else {
          this.y = mouseY;
        }
      } else {
        this.x = this.x + random(-3, 3);
        this.y = this.y + random(-3, 3);
      }
    }
  }

  move() {
    this.moveVariante01();
    this.computeDistances();
  }

  draw() {
    this.center = { x: this.x + this.width / 2, y: this.y + this.height / 2 };
    this.computeDistances();
    this.drawObservedPersonsLines();
    this.drawDistances();

    image(this.image, this.x, this.y, 100, 100);
    if (this.isHero) {
      fill(map(this.distanceToPerson2, 0, 750, 255, 0), 0, 0, 100);
    } else {
      fill(0, 0, map(this.distanceToPerson2, 0, 750, 255, 0), 100);
    }
    fill(255, 255, 255, 10);
    ellipse(this.x + 50, this.y + 50, 100, 100);
    fill(0, 0, 0, 255);
  }
}
