const $links =$('.disc-songs a');
    

            
$links.on('click', function(e){

    e.preventDefault();

   

    
    const href = $(this).attr('href');
    
    $('.disc-description').load(href + '#content',function(){
        

        $('.content').fadeIn();

        
    });

});