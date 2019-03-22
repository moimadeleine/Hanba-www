

let currentNumber = 1;

document.querySelector ( '#slide' + currentNumber ).classList.add ( 'show')





function showNextSlide( ) { 
    let newNumber = currentNumber +1;
    if ( newNumber >5 ) {
        newNumber = 1;
    }   
    showSlide (newNumber)
}
document.querySelector( '#next').addEventListener( 'click', showNextSlide );


function showPreviousSlide( ) {   
    let newNumber = currentNumber -1;
    if ( newNumber <1 ) {
        newNumber = 5;
    }   
    showSlide ( newNumber)
}
document.querySelector( '#prev' ).addEventListener( 'click', showPreviousSlide );

function showSlide( newNumber ) {
    document.querySelector( '.show' ).classList.remove ( 'show' );
    document.querySelector( '#slide' + newNumber ).classList.add ('show');
    currentNumber = newNumber;
    selectPin ( newNumber );
}

