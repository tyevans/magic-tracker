module.exports = {
  updateUsers: function(callback){
    var data = window.appData.users,
        matchData = window.appData.userMatchInfo;

    data.sort(function(a,b){
      return  b.number_of_wins - a.number_of_wins;
    });

    $('[data-user-list]').html(function(){
      var html = "";
      $.each(data, function(index, user){
        if(!matchData[user.id]) return false;
        html += '<li class="list-group-item '
        if (index === 0) { html += 'winner' };
        html += '" ><span class="badge">'+ Math.round((matchData[user.id].wins / matchData[user.id].matches)*100) +'%</span>' + user.first_name + ' ' + '(' + matchData[user.id].wins + '/'+ matchData[user.id].matches + ')</li>';   
      });
      return html;
    });
  },
  getPlayerName: function(id){
    var data = window.appData.users;

    return $.grep(data, function(user){
      return user.id === id;
    })[0].first_name;
  },
  getPlayerList: function(){
    var data = window.appData.users;
    return _.pluck(data, 'id');
  }
};


