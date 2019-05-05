

(function(){

  const discList = document.querySelector('.disc-list');
  const songs = document.querySelector('.songs-list');
  const song = songs.querySelectorAll('.song');
  let windowWidth = window.innerWidth;
  let mobileDevice =windowWidth < 768;


  addScrollTo();

  if (document.querySelector('.close-cd')!=null)  {

    const closeCd = document.querySelector('.close-cd');
    const cdContent =  document.querySelector('.content')


    closeCd.addEventListener('click', function(){
    
        cdContent.remove();
    
      });
    
    }
  
  
  discList.addEventListener('click', function(e){

  
    if (e.target.tagName=="LI" || e.target.tagName=="A") {

  
      let activeSlide = e.target.className;
  
    
  
      for (let i =0; i<song.length; i++) {
  
        song[i].classList.remove('active');
  
      }
  
      songs.querySelector('.'+activeSlide).classList.add('active');
  
    }
  
  });

  //scroll option from song title to text for mobile device only
  function addScrollTo(){

    if(mobileDevice)

    $(songs).attr('id','texts');

  }


  $(window).resize(function(){
   
    let windowWidth = window.innerWidth;
   

    if (windowWidth < 768) {

      $(songs).attr('id','texts');
    }

    else {

      $(songs).removeAttr('id','texts');
    }

  });



})();
  





