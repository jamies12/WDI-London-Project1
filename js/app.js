$(function() {

  var $title = $('.titleCard');
  var $status = $('.status');
  var $gameStartEasy = $('.startGameEasy');
  var $gameStartHard = $('.startGameHard');
  var $restartButton = $('#retry');
  var $healthOrb = $('.healthPickUp');
  var $obstacle = $('.obstacle');
  var $obstacleUp = $('.highObstacle');
  var $obstacleLow = $('.lowObstacle');
  var $obstacleAir = $('.airObstacle');

  $status.hide();
  $restartButton.hide();
  $healthOrb.hide();
  $obstacle.hide();
  $obstacleUp.hide();
  $obstacleLow.hide();
  $obstacleAir.hide();

  $($gameStartEasy).click(function(){
    $miamiRunner();
    $gameStartEasy.hide();
    $gameStartHard.hide();
    $title.fadeOut('slow');
    $status.fadeIn('slow');
  });

  $($gameStartHard).click(function(){
    $miamiRunnerHard();
    $gameStartEasy.hide();
    $gameStartHard.hide();
    $title.fadeOut('slow');
    $status.fadeIn('slow');
  });


  var $miamiRunner = function(){

    var $playSpace = $('.gameSpace');
    var $character = $('.player');
    var $healthOrb = $('.healthPickUp');
    var $obstacle = $('.obstacle');
    var $obstacleUp = $('.highObstacle');
    var $obstacleLow = $('.lowObstacle');
    var $obstacleAir = $('.airObstacle');
    var $status = $('.status');
    var animationDuration = Math.floor(Math.random()*1000) + 1000;
    var $playerScore = $('.score');
    var $scoreCounter = 0;
    var $jumpCount = 0;
    var $slideCount = 0;
    var $lifeCounter = $('.lifeScore');
    var $lifeAmount = 200;
    var $restartButton = $('#retry');
    var $finalScore = $('.highScore');
    var $backGround = $('.backGround');
    var $road = $('.road');

    setInterval(function() {$($backGround).animate({'background-position': '-=1px'});
    }, 500);

    setInterval(function() {$($road).animate({'background-position': '-=50px'}, {
      duration: 500,
      easing: 'linear'});
    });

    $lifeCounter.html('HEALTH: ' + $lifeAmount);

    $restartButton.hide();
    $finalScore.hide();
    $healthOrb.hide();
    $obstacle.hide();
    $obstacleUp.hide();
    $obstacleLow.hide();
    $obstacleAir.hide();

    // restart on death
    $($restartButton).click(function() {
      console.log('Clicked!');
      location.reload();
    });


    // score tracker function
    var $scoreIncrease = setInterval(function() {
          $playerScore.html('Score: ' + $scoreCounter);
          $finalScore.html('HIGH SCORE: ' + $scoreCounter);
          $scoreCounter++;
        }, 50);

    // obstacle movement loops
    function runAnimation(delay) {
      setTimeout(function(){
        $obstacle.animate({ left: 0 }, {
          duration: 2400,
          easing: 'linear',
          progress: function() {
            checkCollisions1();
            $obstacle.show();
          },
          complete: function() {
            $(this).css({left: 860});
            runAnimation(Math.floor(Math.random()*3000) + 1000);
            $obstacle.hide();
          }
        });
      }, delay);
    }
    runAnimation(Math.floor(Math.random()*3000) + 1000);

    function runAnimation2(delay) {
      setTimeout(function(){
        $obstacleUp.animate({ left: 0 }, {
          duration: 2400,
          easing: 'linear',
          progress: function() {
           checkCollisions2();
           $obstacleUp.show();
          },
          complete: function() {
            $(this).css({left: 860});
            runAnimation2(Math.floor(Math.random()*3000) + 1000);
            $obstacleUp.hide();
          }
        });
      }, delay);
    }
    runAnimation2(Math.floor(Math.random()*3000) + 1000);

    function runAnimation3(delay) {
      setTimeout(function(){
        $obstacleLow.animate({ left: 0 }, {
          duration: 2400,
          easing: 'linear',
          progress: function() {
           checkCollisions3();
           $obstacleLow.show();
          },
          complete: function() {
            $(this).css({left: 860});
            runAnimation3(Math.floor(Math.random()*3000) + 1000);
            $obstacleLow.hide();
          }
        });
      }, delay);
    }
    runAnimation3(Math.floor(Math.random()*3000) + 1000);

    function runAnimation4(delay) {
      setTimeout(function(){
        $obstacleAir.animate({ left: 0 }, {
          duration: 2400,
          easing: 'linear',
          progress: function() {
           checkCollisions4();
           $obstacleAir.show();
          },
          complete: function() {
            $(this).css({left: 860});
            runAnimation4(Math.floor(Math.random()*4000) + 1000);
            $obstacleAir.hide();
          }
        });
      }, delay);
    }
    runAnimation4(Math.floor(Math.random()*4000) + 1000);

    // healthOrb movement loop
    function runAnimation5(delay) {
      setTimeout(function(){
        $healthOrb.animate({ left: 0 }, {
          duration: 2400,
          easing: 'linear',
          progress: function() {
           checkCollisions5();
           $healthOrb.show();
          },
          complete: function() {
            $(this).css({left: 860});
            runAnimation5(Math.floor(Math.random()*20000) + 20000);
            $healthOrb.hide();
          }
        });
      }, delay);
    }
    runAnimation5(Math.floor(Math.random()*20000) + 20000);



      // jump function
    $(this).keyup(function(e) {
      if($jumpCount < 2 && (e.keyCode === 0 || e.keyCode === 32)) {
        $jumpCount++;
        $($character).css({
        'background-position': '6px 0px',
        'height': '91' });
        $($character).animate({ top: '-=90px' }, {
          duration: 250,
          easing: 'linear',
          complete: function() {
            fallDown();
            }
        });
      }
    });

    function fallDown() {
      $($character).animate({top: '+=90px',
        'background-position': '35px 0px'},
        {
          duration: 160,
          easing: 'linear',
          complete: function() {
            $($character).css({
              'background-position': '0px 70px',
              'height': '60px',
              'width': '38px'});
          }
      });
      $jumpCount--;

    }

      // slide function
    $(this).keyup(function(e) {
      if($slideCount < 1 && (e.keyCode === 16)) {
        $slideCount++;
        $($character).css({'background-position': '-15px 116px', 'height': '39px', 'width': '49px'});
        $($character).animate({ top: '+=70px'}, {
          duration: 130,
          easing: 'linear',
          complete: function() {
            getUp();
          }
        });
      }

    });

    function getUp() {
      $($character).animate({top: '-=70px'}, {
        duration: 360,
        easing: 'linear',
        complete: function() {
          // standStyle();
        }
      });
      $($character).css({
        'background-position': '0px 70px',
        'height': '60px',
        'width': '38px'});
        $slideCount--;
    }


    // different character css styles for different actions


    function slideStyle() {
      $($character).css({height:30,
        width: 50
      });
    }
    function standStyle() {
      $($character).css({height: '60px',
        width: '38px'
      });

    }

    // collision detection
    //
    // finding player position
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
      if (match) {
        $lifeAmount--;
        $lifeCounter.html('HEALTH: ' + $lifeAmount);
        checkAlive();
        }
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
      if (match) {
        $lifeAmount--;
        $lifeCounter.html('HEALTH: ' + $lifeAmount);
        checkAlive();
        }
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
      if (match) {
        $lifeAmount--;
        $lifeCounter.html('HEALTH: ' + $lifeAmount);
        checkAlive();
        }
      }

    function comparePositions4(p1, p5) {
      var x1 = p1[0] < p5[0] ? p1 : p5;
      var x2 = p1[0] < p5[0] ? p5 : p1;
      return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
    }

    function checkCollisions4(){

      var pos = findPosition($character);

      var pos5 = findPosition($obstacleAir);
      var horizontalMatch4 = comparePositions4(pos[0], pos5[0]);
      var verticalMatch4 = comparePositions4(pos[1], pos5[1]);

      var match = horizontalMatch4 && verticalMatch4;
      if (match) {
        $lifeAmount--;
        $lifeCounter.html('HEALTH: ' + $lifeAmount);
        checkAlive();
        }
      }

      // collision for healthOrb
      //
      function checkCollisions5(){

        var pos = findPosition($character);

        var pos6 = findPosition($healthOrb);
        var horizontalMatch5 = comparePositions4(pos[0], pos6[0]);
        var verticalMatch5 = comparePositions4(pos[1], pos6[1]);

        var match = horizontalMatch5 && verticalMatch5;
        if (match) {
          $lifeAmount++;
          $lifeCounter.html('HEALTH: ' + $lifeAmount);
          checkAlive();
          }
        }

      function checkAlive() {
        if ($lifeAmount > 1) {

        } else {
          $playSpace.fadeOut('slow');
          clearInterval($scoreIncrease);
          $restartButton.show('slow');
          $finalScore.show('slow');
        }
      }


    };

    var $miamiRunnerHard = function(){


      var $playSpace = $('.gameSpace');
      var $character = $('.player');
      var $healthOrb = $('.healthPickUp');
      var $obstacle = $('.obstacle');
      var $obstacleUp = $('.highObstacle');
      var $obstacleLow = $('.lowObstacle');
      var $obstacleAir = $('.airObstacle');
      var $status = $('.status');
      var animationDuration = Math.floor(Math.random()*1000) + 1000;
      var $playerScore = $('.score');
      var $scoreCounter = 0;
      var $jumpCount = 0;
      var $slideCount = 0;
      var $lifeCounter = $('.lifeScore');
      var $lifeAmount = 100;
      var $restartButton = $('#retry');
      var $finalScore = $('.highScore');
      var $backGround = $('.backGround');
      var $road = $('.road');

      setInterval(function() {$($backGround).animate({'background-position': '-=1px'}, {
        duration: 50,
        easing: 'linear'});
      }, 200);

      setInterval(function() {$($road).animate({'background-position': '-=50px'}, {
        duration: 50,
        easing: 'linear'});
      });


      $lifeCounter.html('HEALTH: ' + $lifeAmount);

      $restartButton.hide();
      $finalScore.hide();


      // restart on death
      $($restartButton).click(function() {
        console.log('Clicked!');
        location.reload();
      });


      // score tracker function
      var $scoreIncrease = setInterval(function() {
            $playerScore.html('Score: ' + $scoreCounter);
            $finalScore.html('HIGH SCORE: ' + $scoreCounter);
            $scoreCounter++;
          }, 20);

      // obstacle movement loops
      function runAnimation(delay) {
        setTimeout(function(){
          $obstacle.animate({ left: 0 }, {
            duration: 1600,
            easing: 'linear',
            progress: function() {
              checkCollisions1();
              $obstacle.show();
            },
            complete: function() {
              $(this).css({left: 860});
              runAnimation(Math.floor(Math.random()*2500) + 800);
              $obstacle.hide();
            }
          });
        }, delay);
      }
      runAnimation(Math.floor(Math.random()*2500) + 800);

      function runAnimation2(delay) {
        setTimeout(function(){
          $obstacleUp.animate({ left: 0 }, {
            duration: 1600,
            easing: 'linear',
            progress: function() {
             checkCollisions2();
             $obstacleUp.show();
            },
            complete: function() {
              $(this).css({left: 860});
              runAnimation2(Math.floor(Math.random()*2500) + 800);
              $obstacleUp.hide();
            }
          });
        }, delay);
      }
      runAnimation2(Math.floor(Math.random()*2500) + 800);

      function runAnimation3(delay) {
        setTimeout(function(){
          $obstacleLow.animate({ left: 0 }, {
            duration: 1800,
            easing: 'linear',
            progress: function() {
             checkCollisions3();
             $obstacleLow.show();
            },
            complete: function() {
              $(this).css({left: 860});
              runAnimation3(Math.floor(Math.random()*2500) + 800);
              $obstacleLow.hide();
            }
          });
        }, delay);
      }
      runAnimation3(Math.floor(Math.random()*2500) + 800);

      function runAnimation4(delay) {
        setTimeout(function(){
          $obstacleAir.animate({ left: 0 }, {
            duration: 1600,
            easing: 'linear',
            progress: function() {
             checkCollisions4();
             $obstacleAir.show();
            },
            complete: function() {
              $(this).css({left: 860});
              runAnimation4(Math.floor(Math.random()*3000) + 800);
              $obstacleAir.hide();
            }
          });
        }, delay);
      }
      runAnimation4(Math.floor(Math.random()*3000) + 800);

      // healthOrb movement loop
      function runAnimation5(delay) {
        setTimeout(function(){
          $healthOrb.animate({ left: 0 }, {
            duration: 1400,
            easing: 'linear',
            progress: function() {
             checkCollisions5();
             $healthOrb.show();
            },
            complete: function() {
              $(this).css({left: 860});
              runAnimation5(Math.floor(Math.random()*25000) + 25000);
              $healthOrb.hide();
            }
          });
        }, delay);
      }
      runAnimation5(Math.floor(Math.random()*25000) + 25000);



        // jump function
      $(this).keyup(function(e) {
        if($jumpCount < 2 && (e.keyCode === 0 || e.keyCode === 32)) {
          $jumpCount++;
          $($character).css({'background-position': '6px 0px',
        'height': '91' });
          $($character).animate({ top: '-=90px' }, {
            duration: 220,
            easing: 'linear',
            complete: function() {
              fallDown();
              }
          });
        }
      });

      function fallDown() {
        $($character).animate({top: '+=90px', 'background-position': '35px 0px'}, {
          duration: 120,
          easing: 'linear',
          complete: function() {
            $($character).css({
              'background-position': '0px 70px',
              'height': '60px',
              'width': '38px'});
          }
        });
        $jumpCount--;
      }


        // slide function
      $(this).keyup(function(e) {
        if($slideCount < 1 && (e.keyCode === 16)) {
          $slideCount++;
          $($character).css({'background-position': '-15px 116px', 'height': '39px', 'width': '49px'});
          $($character).animate({ top: '+=70px'}, {
            duration: 110,
            easing: 'linear',
            complete: function() {
              getUp();
            }
          });
        }

      });

      function getUp() {
        $($character).animate({top: '-=70px'}, {
          duration: 300,
          easing: 'linear',
          complete: function() {
          }
        });
        $($character).css({
          'background-position': '0px 70px',
          'height': '60px',
          'width': '38px'});
        $slideCount--;
      }

      // different character css styles for different actions


      function slideStyle() {
        $($character).css({height:30,
          width: 50,
        });
      }
      function standStyle() {
        $($character).css({height: '60px',
          width: '38px'
        });
      }

      // collision detection
      //
      // finding player position
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
        if (match) {
          $lifeAmount--;
          $lifeCounter.html('HEALTH: ' + $lifeAmount);
          checkAlive();
          }
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
        if (match) {
          $lifeAmount--;
          $lifeCounter.html('HEALTH: ' + $lifeAmount);
          checkAlive();
          }
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
        if (match) {
          $lifeAmount--;
          $lifeCounter.html('HEALTH: ' + $lifeAmount);
          checkAlive();
          }
        }

      function comparePositions4(p1, p5) {
        var x1 = p1[0] < p5[0] ? p1 : p5;
        var x2 = p1[0] < p5[0] ? p5 : p1;
        return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
      }

      function checkCollisions4(){

        var pos = findPosition($character);

        var pos5 = findPosition($obstacleAir);
        var horizontalMatch4 = comparePositions4(pos[0], pos5[0]);
        var verticalMatch4 = comparePositions4(pos[1], pos5[1]);

        var match = horizontalMatch4 && verticalMatch4;
        if (match) {
          $lifeAmount--;
          $lifeCounter.html('HEALTH: ' + $lifeAmount);
          checkAlive();
          }
        }

        // collision for healthOrb
        //
        function checkCollisions5(){

          var pos = findPosition($character);

          var pos6 = findPosition($healthOrb);
          var horizontalMatch5 = comparePositions4(pos[0], pos6[0]);
          var verticalMatch5 = comparePositions4(pos[1], pos6[1]);

          var match = horizontalMatch5 && verticalMatch5;
          if (match) {
            $lifeAmount++;
            $lifeCounter.html('HEALTH: ' + $lifeAmount);
            checkAlive();
            }
          }

        function checkAlive() {
          if ($lifeAmount > 1) {

          } else {
            $playSpace.fadeOut('slow');
            clearInterval($scoreIncrease);
            $restartButton.show('slow');
            $finalScore.show('slow');
          }
        }


      };

});
