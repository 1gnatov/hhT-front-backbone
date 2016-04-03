require('../asset/css/app.less');

var Router = require('./router/Router');
var Util = require('./lib/Util');
var tpl = require('../asset/tpl/main.html');

$('body').prepend(tpl({
    list: [
        {url: '', name: 'Home'},
        {url: 'stat/', name: 'Stat'}
    ],
    alerttext: 'alert',
    name: 'User'
}));

$('button').click(function() {
    alert("warning!")
});

window.S = {};

S.router = new Router();

Backbone.history.start({
    root : ''
});