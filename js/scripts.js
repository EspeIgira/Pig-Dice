function Player(playerName, score, turnScore) {
  this.playerName = playerName;
  this.score = score;
  this.turn = turn;
}
// roll:It is for one roll of a dice
// turn: Amount of points added from many rolls of a dice
// score:Final score


Player.prototype.rollDie = function(){
  var roll = 0
  var diceArray = []

  var dice1 = Math.floor(Math.random()*(7-1)+1);
  var dice2 = Math.floor(Math.random()*(7-1)+1);

  if (dice1 !== 1 && dice2 !== 1){
    var totalDice = dice1 + dice2;
    roll = totalDice;
    this.turn += roll;

  }else{
    roll = 0;
    this.turn = 0;
    return "Hit One";
  }

  diceArray.push(dice1, dice2);
  return diceArray;
};

