// createDragon
function createDragon (dragonName, riderName, temperment) {
 return Dragon = {
  name: dragonName,
  rider: riderName,
  temperment: temperment,
  timesEaten: 0,
  hungry: true
}
}

// greetRider
function greetRider(dragonName) {
  return `Hi, ${dragonName.rider}!`
}

// eat
function eat(dragon) {
  if (dragon.timesEaten < 3) {
    dragon.timesEaten++
  } 
  if (dragon.timesEaten >= 3) {
    dragon.hungry = false
  } 
  return dragon
}

// findFireBreathers
function findFireBreathers(allDragons) {
  var fireBreathers = []
    for (var i = 0; i < allDragons.length; i++)
    if (allDragons[i].temperment === 'aggressive') {
      fireBreathers.push(allDragons[i])
    } 
  return fireBreathers
}

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}