

(function(){

  const discList = document.querySelector('.disc-list');
  const li = discList.querySelectorAll('li');
  let currentSlide = 'slider1';
  const songs = document.querySelector('.songs-list');
  const song = songs.querySelectorAll('.song');

  
  
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
  





