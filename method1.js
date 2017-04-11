var direction;
var angle;

function do_something() {
  direction = 0;
  angle = 270;
  while (true) {
    if (angle < 40) {
      stop();
      swim(0);
    }
    if (angle > 40) {
      swim(0);
      cannon(angle, angle);
    }
  }
}


direction = 0;
angle = 270;
while (true) {
  swim(angle);
  while (scan(angle) > 50) {
    angle = (typeof angle == 'number' ? angle : 0) + 5;
  }
  cannon(angle, scan(angle));
  while (scan(direction) > 50) {
    direction = (typeof direction == 'number' ? direction : 0) + -5;
  }
}
