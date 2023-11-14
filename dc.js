$( document ).ready(function() {
  $.ajax({
      url: 'https://content-out.bepress.com/v2/scholarworks.sjsu.edu',
      headers: {
        Authorization: 'LLr8ZHGk84afkQIX8mvHHTsNO6kDDoK/C/V0bq1rdvE='
      }
    }).done(function(data) {
          console.log(data);
      });

});
