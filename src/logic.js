function info() {
    console.log("INFO");
    const response = {
        apiversion: "1",
        author: "hatben",
        color: "#f6537a",
        head: "safe",
        tail: "rbc-necktie"
    };
    return response;
}

function start(gameState) {
    console.log(`${gameState.game.id} START`);
}

function end(gameState) {
    console.log(`${gameState.game.id} END\n`);
}

function move(gameState) {
    let possibleMoves = {
        up: true,
        down: true,
        left: true,
        right: true
    }

    // Step 0: Don't let your Battlesnake move back on it's own neck
    const myHead = gameState.you.head;
    const myNeck = gameState.you.body[1];
    if (myNeck.x < myHead.x) {
        possibleMoves.left = false;
    } else if (myNeck.x > myHead.x) {
        possibleMoves.right = false;
    } else if (myNeck.y < myHead.y) {
        possibleMoves.down = false;
    } else if (myNeck.y > myHead.y) {
        possibleMoves.up = false;
    }

    // TODO: Step 1 - Don't hit walls.
    // Use information in gameState to prevent your Battlesnake from moving beyond the boundaries of the board.
    const boardWidth = gameState.board.width
    const boardHeight = gameState.board.height
    if (myHead.x === 0) {
      possibleMoves.left = false;
    } else if (myHead.x === boardWidth - 1) {
      possibleMoves.right = false;
    }
    if (myHead.y === 0) {
      possibleMoves.down = false;
    } else if (myHead.y === boardHeight - 1) {
      possibleMoves.up = false;
    }

    // TODO: Step 2 - Don't hit yourself.
    // Use information in gameState to prevent your Battlesnake from colliding with itself.
    const [_, ...myTail] = gameState.you.body;
    console.log('before', gameState.you.body.length);
    console.log('body', myTail.length);

    myTail.forEach(tailSegment => {
      const invalidMove = isAdjacent(tailSegment, myHead);
      if (invalidMove !== '') {
        possibleMoves[invalidMove] = false;
      }
    });

    // TODO: Step 3 - Don't collide with others.
    // Use information in gameState to prevent your Battlesnake from colliding with others.
    const myId = gameState.you.id;
    const otherSnakes = gameState.board.snakes.filter(snake => snake.id !== myId);
    otherSnakes.forEach(snake => {
      snake.body.forEach(otherSnakeSegment => {
        const invalidMove = isAdjacent(otherSnakeSegment, myHead);
        if (invalidMove !== '') {
          possibleMoves[invalidMove] = false;
        }
      });
    });


    // TODO: Step 4 - Find food.
    // Use information in gameState to seek out and find food.
    const closestFood = findClosestFood(myHead, gameState.board);
    const xDist = closestFood.x - myHead.x;
    const yDist = closestFood.y - myHead.y;
    const xPreference = xDist > 0 ? 'right' : 'left';
    const yPreference = yDist > 0 ? 'up' : 'down';
    const firstPreference = Math.abs(xDist) > Math.abs(yDist) ? xPreference : yPreference;
    const secondPreference = firstPreference === xPreference ? yPreference : xPreference;

  

    // Finally, choose a move from the available safe moves.
    // TODO: Step 5 - Select a move to make based on strategy, rather than random.
    const safeMoves = Object.keys(possibleMoves).filter(key => possibleMoves[key]);
    let move;
    if (safeMoves.includes(firstPreference)) {
      move = firstPreference;
    } else if (safeMoves.includes(secondPreference)) {
      move = secondPreference;
    } else {
      move = safeMoves[Math.floor(Math.random() * safeMoves.length)];
    }

    const response = {
        move,
    };


    console.log(`${gameState.game.id} MOVE ${gameState.turn}: ${response.move}`);
    return response
}

function isAdjacent(point, head) {
  if (point.x === head.x) {
    if (point.y === head.y + 1) {
      return 'up';
    } else if (point.y === head.y - 1) {
      return 'down';
    }
  }
  if (point.y === head.y) {
    if (point.x === head.x + 1) {
      return 'right';
    } else if (point.x === head.x - 1) {
      return 'left';
    }
  }
  return '';
}

function findClosestFood(head, board) {
  if (board.food.length === 0) {
    return {x: 0, y: 0};
  }
  let closestFood = null;
  let result = {};
  board.food.forEach(food => {
    const distance = Math.sqrt(Math.pow(head.x-food.x, 2) + Math.pow(head.y-food.y, 2));
    if (closestFood === null || distance < closestFood) {
      closestFood = distance;
      result = food;
    }
  });
  return result;
}

module.exports = {
    info: info,
    start: start,
    move: move,
    end: end
}
