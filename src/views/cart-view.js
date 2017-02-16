var m = require("mithril")
var externalData = require("../models/cart")
var itemView = require("./item-view")

module.exports = {
  view: function() {
    let data = externalData
    return <div class="container">
      <div class="header">My Cart ({data.items.length} items)</div>
      <div class="items">
        {this.getItems(data)}
      </div>
      <div class="summary">
        Total : {data.total()}/-
      </div>
    </div>
  },
  getItems(data) {
    return data.items.map(function(d) {
      return m(itemView, d)
    })
  }
}
