// code your solution here
function saturdayFun(play = "roller-skate") {
  return `This Saturday, I want to ${play}!`;
}
saturdayFun();

const mondayWork = function (duty = "go to the office") {
  return `This Monday, I will ${duty}.`;
};

mondayWork();

function wrapAdjective(agressive = "*") {
  return function (occassion = "special") {
    return `You are ${agressive}${occassion}${agressive}!`;
  };
}

wrapAdjective()()