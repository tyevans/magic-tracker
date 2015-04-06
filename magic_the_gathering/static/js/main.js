window.appData = window.appData || {};

var ajax = require('./ajax.js'),
    matches = require('./matches.js'),
    users = require('./users.js');

$(document).ready(function(){
  ajax.getUsers();
  ajax.getMatches();
});

Object.observe(window.appData, function(){
  updateState();
});

function updateState(){
  var data = window.appData
  if(data.matches) {
    matches.updateMatches();    
  }
  if(data.users) users.updateUsers();
}

