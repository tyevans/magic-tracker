var Match = Match || (function($){
  function getMatches(){
    $.ajax({
      url: '/api/matches/',
      type:'GET',
      dataType: 'json'
    }).success(function(data){
      console.log(data);
    });
  }

  function initMatches(data){
    Match.data = data;
    $('[data-match-list]').html(function(){
      var html = "";
      $.each(data, function(index, match){
        html += '<li>' + match.winner + '</li>';     
      });
      return html;
    });
  }

  return{
    getMatches: getMatches
  };
}(jQuery));