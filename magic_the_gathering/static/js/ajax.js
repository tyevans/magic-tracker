module.exports = {
  getUsers: function (){
    $.ajax({
      url: '/api/users/',
      type:'GET',
      dataType: 'json'
    }).success(function(data){
      updateData('users', data);
    });
  },
  getMatches: function (callback){
    $.ajax({
      url: '/api/matches/',
      type:'GET',
      dataType: 'json'
    }).success(function(data){
      updateData('matches', data);
    });
  }
}

function updateData(identifier, data){
  if(window.appData) return window.appData[identifier] = data;
  window.appData = {};
  window.appData[identifier] = data;
}

