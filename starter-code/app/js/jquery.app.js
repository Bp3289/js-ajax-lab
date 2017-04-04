$(document).ready(function(){
  $('form#new-cat').on('submit');
  makeCats();
});

var cats = {
	name: $('form#new-cat input#cat-name').val(),
    note: $('form#new-cat textarea#cat-note').val()
  };

 $.post('https://ga-cat-rescue.herokuapp.com/api/cats', JSON.stringify(cats))
    .done(function(data){
      
    });

function makeCats(){
  var gattos = $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
    .done(function(data){
      console.log(data);
      JSON.parse(data).forEach(function(cats){
        console.log(cats);
        
      });
    });
	



}



