

(function(){

  const discList = document.querySelector('.disc-list');
  const songs = document.querySelector('.songs-list');
  const song = songs.querySelectorAll('.song');




  if (document.querySelector('.close-cd')!=null)  {

    const closeCd = document.querySelector('.close-cd');
    const cdContent =  document.querySelector('.content')


    closeCd.addEventListener('click', function(){
    
    
        cdContent.remove();
    
      });
    
    }
  
  
  discList.addEventListener('click', function(e){
  
  
    if (e.target.tagName=="LI") {
  
      let activeSlide = e.target.className;
  
  
    
  
      for (let i =0; i<song.length; i++) {
  
        song[i].classList.remove('active');
  
      }
  
      songs.querySelector('.'+activeSlide).classList.add('active');
  
  
    }
  
  });

})();
  





