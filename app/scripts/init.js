import $ from 'jquery';
import Backbone from 'backbone';
import Routers from './routers/routers';
require('../styles/app.less');

$(() => {
  new Routers();
  Backbone.history.start();

  console.log($);
  console.log(Backbone);
  console.log(Routers);
});
