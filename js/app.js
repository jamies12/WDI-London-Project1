$(function() {

  var checkCollisionsIntervalId;
  var $playSpace = $('.gameSpace');
  var $character = $('.player');
  var $obstacle = $('.obstacle');
  var $obstacleUp = $('.highObstacle');
  var $obstacleLow = $('.lowObstacle');
  var $status = $('.status');
  var animationDuration = Math.floor(Math.random()*1000) + 1000;
  var $playerScore = $('.score');

  $playerScore = 0;

  setInterval(function() {
    $playerScore++;
    $('.score').text = $playerScore;
  }, 200);


  function runAnimation(delay) {
    setTimeout(function(){
      $obstacle.animate({ left: -50 }, {
        duration: 2400,
        easing: 'linear',
        progress: function() {
          checkCollisions1();
        },
        complete: function() {
          $(this).css({left: 905});
          runAnimation(Math.floor(Math.random()*3000) + 1000);
        }
      });
    }, delay);
  }
  runAnimation(Math.floor(Math.random()*3000) + 1000);


  function runAnimation2(delay) {
    setTimeout(function(){
      $obstacleUp.animate({ left: -90 }, {
        duration: 2400,
        easing: 'linear',
        progress: function() {
         checkCollisions2();
        },
        complete: function() {
          $(this).css({left: 905});
          runAnimation2(Math.floor(Math.random()*3000) + 1000);
        }
      });
    }, delay);
  }
  runAnimation2(Math.floor(Math.random()*3000) + 1000);

  function runAnimation3(delay) {
    setTimeout(function(){
      $obstacleLow.animate({ left: -90 }, {
        duration: 2400,
        easing: 'linear',
        progress: function() {
         checkCollisions3();
        },
        complete: function() {
          $(this).css({left: 905});
          runAnimation3(Math.floor(Math.random()*3000) + 1000);
        }
      });
    }, delay);
  }
  runAnimation3(Math.floor(Math.random()*3000) + 1000);

  $(this).keyup(function(e) {
    if(e.keyCode === 0 || e.keyCode === 32) {
      $($character).animate({ top: 260 }, {
        duration: 300,
        easing: 'linear',
        complete: function() {
          fallDown();
          }
      });
    }
  });

  $(this).keyup(function(e) {
    if(e.keyCode === 16) {
      $($character).animate({ top: 380}, {
        duration: 200,
        easing: 'linear',
        complete: function() {
          getUp();
        }
      });
    }

  });

  function getUp() {
    $($character).animate({top: 340}, {
      duration: 150,
      easing: 'linear'
    });
  }

  function fallDown() {
    $($character).animate({top: 340}, {
      duration: 150,
      easing: 'linear'
    });
  }

  function findPosition($character) {
    var pos = $character.position();
    var width = $character.width();
    var height = $character.height();
    return [[pos.left, pos.left + width], [pos.top, pos.top + height]];
  }

  function comparePositions(p1, p2) {
    var x1 = p1[0] < p2[0] ? p1 : p2;
    var x2 = p1[0] < p2[0] ? p2 : p1;
    return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
  }

  function checkCollisions1(){

    var pos = findPosition($character);

    var pos2 = findPosition($obstacle);
    var horizontalMatch = comparePositions(pos[0], pos2[0]);
    var verticalMatch = comparePositions(pos[1], pos2[1]);

    var match = horizontalMatch && verticalMatch;
    if (match) {console.log('COLLISION!');}
  }


  function initiateCheckCollisions2() {
    checkCollisionsIntervalId1 = setInterval(checkCollisions2, 1620);
  }

  function comparePositions2(p1, p3) {
    var x1 = p1[0] < p3[0] ? p1 : p3;
    var x2 = p1[0] < p3[0] ? p3 : p1;
    return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
  }

  function checkCollisions2(){

    var pos = findPosition($character);

    var pos3 = findPosition($obstacleUp);
    var horizontalMatch2 = comparePositions2(pos[0], pos3[0]);
    var verticalMatch2 = comparePositions2(pos[1], pos3[1]);

    var match = horizontalMatch2 && verticalMatch2;
    if (match) {console.log('COLLISION HIGH!');}
  }


  function initiateCheckCollisions3() {
    checkCollisionsIntervalId1 = setInterval(checkCollisions3, 1500);
  }

  function comparePositions3(p1, p4) {
    var x1 = p1[0] < p4[0] ? p1 : p4;
    var x2 = p1[0] < p4[0] ? p4 : p1;
    return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
  }

  function checkCollisions3(){

    var pos = findPosition($character);

    var pos4 = findPosition($obstacleLow);
    var horizontalMatch3 = comparePositions3(pos[0], pos4[0]);
    var verticalMatch3 = comparePositions3(pos[1], pos4[1]);

    var match = horizontalMatch3 && verticalMatch3;
    if (match) {console.log('COLLISION LOW!');}
  }

});
