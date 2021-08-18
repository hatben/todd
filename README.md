# Battle Snakes
Instructions for the battle snake dev day


# Resources
- [Battle Snake Website](https://play.battlesnake.com/)
- [Battle Snake Docs](https://docs.battlesnake.com/)
- [Battle Snake Quick Start Guide](https://docs.battlesnake.com/guides/getting-started)


# Getting Started

## Creating your snake
- sign in with github
- go to profile page
- create new snake
- set to public when you are ready to play against other people

## Other snakes you can play against
- DevDaySuperStar
- NotSoGreat


## Routes
[Battle Snake API reference](https://docs.battlesnake.com/references/api)

### /
 -empty get request 
 - return 200 with
 ```
    {
    "apiversion": "1",
    "author": "MyUsername",
    "color" : "#888888",
    "head" : "default",
    "tail" : "default",
    "version" : "0.0.1-beta"
    }
```
[Personalize your Battle Snake](https://docs.battlesnake.com/references/personalization)

### /start
- post
- return 200 with move

### /move
- post
- return 200 with move
```
{
  "move": "up",
  "shout": "I am moving up!"
}
```

### /end
- post 
- return 200 empty 


## Sample Move Request
[Sample move Reqest for your Battle Snake](https://docs.battlesnake.com/references/api/sample-move-request)


```
{
  "game": {
    "id": "game-00fe20da-94ad-11ea-bb37",
    "ruleset": {
      "name": "standard",
      "version": "v.1.2.3"
    },
    "timeout": 500
  },
  "turn": 14,
  "board": {
    "height": 11,
    "width": 11,
    "food": [
      {"x": 5, "y": 5}, 
      {"x": 9, "y": 0}, 
      {"x": 2, "y": 6}
    ],
    "hazards": [
      {"x": 3, "y": 2}
    ],
    "snakes": [
      {
        "id": "snake-508e96ac-94ad-11ea-bb37",
        "name": "My Snake",
        "health": 54,
        "body": [
          {"x": 0, "y": 0}, 
          {"x": 1, "y": 0}, 
          {"x": 2, "y": 0}
        ],
        "latency": "111",
        "head": {"x": 0, "y": 0},
        "length": 3,
        "shout": "why are we shouting??",
        "squad": ""
      }, 
      {
        "id": "snake-b67f4906-94ae-11ea-bb37",
        "name": "Another Snake",
        "health": 16,
        "body": [
          {"x": 5, "y": 4}, 
          {"x": 5, "y": 3}, 
          {"x": 6, "y": 3},
          {"x": 6, "y": 2}
        ],
        "latency": "222",
        "head": {"x": 5, "y": 4},
        "length": 4,
        "shout": "I'm not really sure...",
        "squad": ""
      }
    ]
  },
  "you": {
    "id": "snake-508e96ac-94ad-11ea-bb37",
    "name": "My Snake",
    "health": 54,
    "body": [
      {"x": 0, "y": 0}, 
      {"x": 1, "y": 0}, 
      {"x": 2, "y": 0}
    ],
    "latency": "111",
    "head": {"x": 0, "y": 0},
    "length": 3,
    "shout": "why are we shouting??",
    "squad": ""
  }
}
```

## Basic Concepts
- don't run into yourself
- don't hit the walls
- don't run into other snakes
- find food
- attack other snakes if possible?


# Hosting Options
[Hosting Suggestions](https://docs.battlesnake.com/references/hosting-suggestions)

## Replit

 - login with github
 - choose create 
 - pick languge you would like
 - copy url to snake (use http not https)
 - start programming routes

## Heroku setup

### Heroku install commands

```
brew tap heroku/brew && brew install heroku
```

create a heroku account

### On the Heroku website

- create a new app
- choose region US
- follow the commands on the screen using whatever CLI you would like


### Make sure you make a Procfile file in your project

- a Procfile file is where you put the commands to run your sever once its deployed
- use web: before the command
- ex (web: deno run --allow-net=:${PORT} index.ts --port=${PORT})

### Copy URL
- copy the URL to your battle snake and play!

## CodeSandbox

- sign in with github
- choose correct server template 
- add any needed dependences
- copy url to snake



# Have Fun











