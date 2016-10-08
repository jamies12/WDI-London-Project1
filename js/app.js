$(function() {

  var checkCollisionsIntervalId;
  var playSpace = $('.gameSpace');
  var character = $('.player');
  var obstacle = $('.obstacle');
  var obstacleUp = $('.highObstacle');
  var obstacleLow = $('.lowObstacle');
  var obstacleDelete = $('.killZone');
  var gameOver = $('.status');
  // var clone = $(obstacle).clone(true);

  var obstaclePosition = $(obstacle).position();
  var characterPosition = $(character).position();
  console.log(characterPosition);
  console.log(obstaclePosition);
  // console.log(clone);

  $(obstacle).click(function() {
    console.log('obstacle clicked');
    obstacle.animate({left: -50}, 1800, 'linear', checkCollisions1);
    initiateCheckCollisions1();
  });
  $(obstacleUp).click(function() {
    console.log('obstacleUp clicked');
    obstacleUp.animate({left: -50}, 1800, 'linear', checkCollisions2);
    initiateCheckCollisions2();
  });
  $(obstacleLow).click(function() {
    console.log('obstacleLow clicked');
    obstacleLow.animate({left: -50}, 1800, 'linear', checkCollisions3);
    initiateCheckCollisions3();
  });


  function initiateCheckCollisions1() {
    checkCollisionsIntervalId1 = setInterval(checkCollisions1, 40);
  }

  function findPosition(playerChar) {
    var $playerChar = $(playerChar);
    var pos = $playerChar.position();
    var width = $playerChar.width();
    var height = $playerChar.height();
    return [[pos.left, pos.left + width], [pos.top, pos.top + height]];
  }

  function comparePositions(p1, p2) {
    var x1 = p1[0] < p2[0] ? p1 : p2;
    var x2 = p1[0] < p2[0] ? p2 : p1;
    return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
  }

  function checkCollisions1(){
    var playerChar = $('.player')[0];
    var pos = findPosition(playerChar);

    var pos2 = findPosition(obstacle);
    var horizontalMatch = comparePositions(pos[0], pos2[0]);
    var verticalMatch = comparePositions(pos[1], pos2[1]);

    var match = horizontalMatch && verticalMatch;
    if (match) {console.log('COLLISION!');}
  }


  function initiateCheckCollisions2() {
    checkCollisionsIntervalId1 = setInterval(checkCollisions2, 40);
  }

  function comparePositions2(p1, p3) {
    var x1 = p1[0] < p3[0] ? p1 : p3;
    var x2 = p1[0] < p3[0] ? p3 : p1;
    return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
  }

  function checkCollisions2(){
    var playerChar = $('.player')[0];
    var pos = findPosition(playerChar);

    var pos3 = findPosition(obstacleUp);
    var horizontalMatch2 = comparePositions2(pos[0], pos3[0]);
    var verticalMatch2 = comparePositions2(pos[1], pos3[1]);

    var match = horizontalMatch2 && verticalMatch2;
    if (match) {console.log('COLLISION HIGH!');}
  }


  function initiateCheckCollisions3() {
    checkCollisionsIntervalId1 = setInterval(checkCollisions3, 40);
  }

  function comparePositions3(p1, p4) {
    var x1 = p1[0] < p4[0] ? p1 : p4;
    var x2 = p1[0] < p4[0] ? p4 : p1;
    return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
  }

  function checkCollisions3(){
    var playerChar = $('.player')[0];
    var pos = findPosition(playerChar);

    var pos4 = findPosition(obstacleLow);
    var horizontalMatch3 = comparePositions3(pos[0], pos4[0]);
    var verticalMatch3 = comparePositions3(pos[1], pos4[1]);

    var match = horizontalMatch3 && verticalMatch3;
    if (match) {console.log('COLLISION LOW!');}
  }



  $('#stop-detecting-collisions').click(function () {
    clearInterval(checkCollisionsIntervalId);
  });




});
