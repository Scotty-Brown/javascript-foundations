
function createIngredient(name, price) {
    return {
        name: name ?? 'unknown',
        price: price ?? 0.00
    }
}

function createTaco(name, ingredList) {
    return {
        name: name ?? 'custom',
        ingredients: ingredList ?? []
    }
}

function addIngredientToTaco(taco, ingredient) {
    taco.ingredients.push(ingredient)
        return taco
}

function calculatePrice(taco) {
    var sum = 0
    for (var i = 0; i < taco.ingredients.length; i++) {
    sum += taco.ingredients[i].price
  } return sum
}


module.exports = {
    createIngredient,
    createTaco,
    addIngredientToTaco,
    calculatePrice
}
