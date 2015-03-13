module.exports = {
  updateUsers: function(){
    var data = window.appData.users;
    $('[data-user-list]').html(function(){
      var html = "";
      $.each(data, function(index, user){
        html += '<li class="list-group-item" ><span class="badge">'+ getRecord(user.id) +'</span>' + user.first_name + '</li>';     
      });
      return html;
    });
  },
  getPlayerName: function(id){
    var data = window.appData.users;
    return data[id-1].first_name;
  }
};

function getRecord(id){
  var count = 0;
  $.each(window.appData.matches, function(index,match){
    if (match.results[0].player === id) count++;
  });

  return count;
}

