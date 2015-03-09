var User = User || (function($){
  function getUsers(){
    $.ajax({
      url: '/api/users/',
      type:'GET',
      dataType: 'json'
    }).success(function(data){
      initUsers(data);
    });
  }

  function initUsers(data){
    User.data = data;
    $('[data-user-list]').html(function(){
      var html = "";
      $.each(data, function(index, user){
        html += '<li>' + user.first_name + '</li>';     
      });
      return html;
    });
  }

  return{
    getUsers: getUsers
  };
}(jQuery));