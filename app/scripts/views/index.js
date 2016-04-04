import {View} from 'backbone';
import _ from 'underscore';

export default class extends View {

  constructor() {
    super({
      events: { // *Define the DOM events specific to an item.*
        'click #foo': 'foo'
      }
    });

    this.template = this.getTemplate();

    console.log('indexView');
  }

  render () {
    this.$el.html(this.template({success: 'Click me!'}));
    return this;
  }

  foo () {
    console.log('bar');
  }

  getTemplate () {
    return _.template('<button id="foo"><%= success %></button>');
  }
}
