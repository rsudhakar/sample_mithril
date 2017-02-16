var m = require("mithril")

module.exports = {
  data: {},

  view: function(vnode) {
    vnode.state.data = vnode.attrs
    return (
      <div class="item" onclick={this.updateIt.bind(this)}>
        <b>{this.data.name}</b> : {this.data.cost}/-
      </div>
    )
  },

  updateIt: function () {
    this.data.cost = this.data.cost + 100
  }
}
