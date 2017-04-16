$(document).ready(function(){
  $('form#new-cat').on('submit', sendData);
  makeCats();
});

  function sendData(e) {
    e.preventDefault();


   var cat = {
     name: $('form#new-cat input#cat-name').val(),
    note: $('form#new-cat textarea#cat-note').val()
    	
};



 $.post('https://ga-cat-rescue.herokuapp.com/api/cats', JSON.stringify(cat))
    .done(function(data){
      addCat(JSON.parse(data));
      });



    $('form#new-cat input#cat-name').val(null);


   }
  
 
		
			function makeCats(){
 		 $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
    .done(function(data){
      console.log(data);
      JSON.parse(data).forEach(function(cat){
        console.log(cat);
        addCat(cat);
        });
    });
  }
	
    
     function addCat(cat) {
    $("ul#cats").append("<li>" + cat.name + " - <em>" + cat.note + "</em></li>");
}


