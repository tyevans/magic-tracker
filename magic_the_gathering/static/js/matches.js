var users = require('./users.js');

module.exports = {
  updateMatches: function(){
    var data = window.appData.matches;

    $('[data-match-list]').html(function(){
      var html = "";
      $.each(data, function(index, match){
        html += '<li class="list-group-item" >' + getMatchPlayers(match) + '</li>';     
      });
      return html;
    });
  }
};

function getMatchPlayers(match){
  var players = [];
  
  $.each(match.results, function(index, result){
    var name = users.getPlayerName(result.player);
    if(index === 0){
      players.push( '<b>' + name + '</b>'); 
    }else{
      players.push( name ); 
    }
  });
  return players.join(' vs. ');
}