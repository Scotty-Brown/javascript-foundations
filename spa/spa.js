
function createCustomer(name, bill, service){
  return {
    name: name,
    bill: bill,
    bookings: service || [],
  }
}

function greeting(spaCustomer){
  if (spaCustomer.bill === 0){
    return `${spaCustomer.name}! Welcome to Happy Spa`
  } 
  return `${spaCustomer.name}! Welcome back to Happy Spa`
}

function createService(service, amount) {
  if (service === undefined && amount === undefined) {
    return 'Please provide service name and cost.'
  } return {
      name: service,
      cost: amount
  }
}

function bookServices (customer, service) {
  var serviceName = service.name
  var serviceCost = service.cost
  customer.bookings.push(serviceName)
  customer.bill += serviceCost
  return customer
}

function applyGiftCard (allService, gcAmount) {
  var canAfford = []
  for (var i = 0; i < allService.length; i++) {
    if (allService[i].price <= gcAmount) {
     canAfford.push(allService[i].name)
    }
  } return canAfford
}

module.exports = { 
  createCustomer, 
  greeting, 
  createService,
  bookServices, 
  applyGiftCard 
}
