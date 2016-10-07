$(function() {

  playSpace = $('.gameSpace');
  character = $('.player');
  obstacle = $('.obstacle');

  obstaclePosition = $(obstacle).position();
  characterPosition = $(character).position();
  console.log(characterPosition);
  console.log(obstaclePosition);


  $(obstacle).click(function() {
    console.log('obstacle clicked');
    (obstacle).animate({left: 0},3000);
  });
  


});
