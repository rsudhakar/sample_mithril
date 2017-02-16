var m = require("mithril")

module.exports = {
  controller: function(data) {
    return {
      data: data,
      render: data ? true : false
    }
  },
  /*checkValid:function(data){
    if(!data){
      return {};
    }
    //further cases for individual keys
    else{
      return data;
    }
  }*/
  view: function(viewModel) {
    // return <div class="item"><b>{data.name}</b> : {data.cost}/-</div>

    return  viewModel.render ? m(".item",[
      m("b", viewModel.data.name), ` : ${viewModel.data.cost1}/-`
    ]) : ''
  }
}
