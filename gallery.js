

let currentNumber = 1;
document.querySelector ( '#pin' + currentNumber ).classList.add ( 'selected')
document.querySelector ( '#slide' + currentNumber ).classList.add ( 'show')


for (let numerPinu = 1; numerPinu <=5; numerPinu++) {
    document.querySelector( '#pin' + numerPinu ).addEventListener( 'click', function ( ) { 
        showSlide ( numerPinu )
    } );

}


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

function selectPin( newNumber ) {
    document.querySelector ( '.selected' ).classList.remove ( 'selected' );
    document.querySelector ( '#pin' + newNumber ).classList.add ( 'selected' );
}