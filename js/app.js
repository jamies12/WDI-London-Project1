$(function() {

  playSpace = $('.gameSpace');
  character = $('.player');
  obstacle = $('.obstacle');
  gameOver = $('.status');
  clone = $(obstacle).clone(true);

  obstaclePosition = $(obstacle).position();
  characterPosition = $(character).position();
  console.log(characterPosition);
  console.log(obstaclePosition);
  // console.log(clone);

  $(obstacle).click(function() {
    console.log('obstacle clicked');
    (obstacle).animate({left: -50},2000, 'linear', checkCollisions);

  });

  function findPosition(obstacle) {
    var $obstacle = $(obstacle);
    var pos = $obstacle.position();
    var width = $obstacle.width();
    var height = $obstacle.height();
    return [[pos.left, pos.left + width], [pos.top, pos.top + height]];
  }

  function comparePositions(p1, p2) {
    var x1 = p1[0] < p2[0] ? p1 : p2;
    var x2 = p1[0] < p2[0] ? p2 : p1;
    return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
  }

  function checkCollisions(){
    var playerChar = $('.obstacle')[0];
    var pos = findPosition(obstacle);

    var pos2 = findPosition(this);
    var horizontalMatch = comparePositions(pos[0], pos2[0]);
    var verticalMatch = comparePositions(pos[1], pos2[1]);

    var match = horizontalMatch && verticalMatch;
    if (match) {console.log('COLLISION!');}
  }







});
