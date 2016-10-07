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
    (obstacle).animate({left: -50},2000, 'linear');
    $collision();
    // obstacle.append(clone);
    // obstacle.fadeIn(20, 'linear');
  });

  $collision = (function () {
    if(obstaclePosition <= characterPosition) {
      $(gameOver).text = "COLLISION!";
    }
  });

  $collision();

});
