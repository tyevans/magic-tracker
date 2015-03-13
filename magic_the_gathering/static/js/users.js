module.exports = {
  updateUsers: function(){
    var data = window.appData.users;
    $('[data-user-list]').html(function(){
      var html = "";
      $.each(data, function(index, user){
        html += '<li class="list-group-item" ><span class="badge">'+ user.number_of_wins +'</span>' + user.first_name + '</li>';     
      });
      return html;
    });
  },
  getPlayerName: function(id){
    var data = window.appData.users;
    return data[id-1].first_name;
  }
};
