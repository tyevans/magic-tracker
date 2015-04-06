var users = require('./users.js');

window.appData.userMatchInfo = [];

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
    var user;

    if(!window.appData.userMatchInfo[result.player]){
      window.appData.userMatchInfo[result.player] = {'wins':0,'matches':0};
    }

    user = window.appData.userMatchInfo[result.player];

    if(index === 0) user.wins++;

    user.matches++;

    var name = users.getPlayerName(result.player);
    if(index === 0){
      players.push( '<b>' + name  + '</b>'); 
    }else{
      players.push( name ); 
    }
  });

  return players.join(' vs. ');
}