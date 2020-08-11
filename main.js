SC.initialize({
    client_id: '340f063c670272fac27cfa67bffcafc4'
  });

  $(document).ready(function() { 
    SC.stream('/tracks/271004119',function(sound){
        
        //function for start button
        $('#start').click(function(e) {
            e.preventDefault();
            sound.start();
          });
  //function for stop button

          $('#stop').click(function(e) {
            e.preventDefault();
            sound.stop();
          });
  
        
    });
   }); 
