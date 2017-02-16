module.exports = {
  items: [
    {sku: '1233243455', name: 'Ring', cost: 6720},
    {sku: '1232141244', name: 'Coin 1g', cost: 3400}
  ],

  total: function () {
    return this.items.reduce(function(total, item) {
      return total + item.cost
    }, 0)
  }
 }
