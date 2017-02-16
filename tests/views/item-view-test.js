var o = require("ospec")
// var mq = require("mithril-query")
var itemView = require("../../src/views/item-view")

o("should render the item name and cost", function() {
  let content = itemView.view({render:true,data:{name: "test", cost: 100}})
  viewString = JSON.stringify(content)
  o(viewString.indexOf("100/-")).notEquals(-1)
  // let output = mq(content)
  // output.should.have('.item')
})

o("Should not fail for invalid data", function(){
  let itemControllerData = itemView.controller();
  let content = itemView.view(itemControllerData);
  console.log(content)
  o(content).equals('')

})
