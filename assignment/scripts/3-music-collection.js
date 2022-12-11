console.log('***** Music Collection *****')

let collection = [];

function addToCollection ( title, artist, yearPuplished ) {
    let record = {
        title: title,
        artist: artist,
        yearPuplished: yearPuplished,
    }
    collection.push(record);
    return record;
}

console.log( addToCollection( 'To Pimp a Butterfly', 'Kendrick Lamar', '2015' ) );
console.log( collection ); // To check if first album was added.
console.log( addToCollection( 'Circles', 'Mac Miller', '2020' ) );
console.log( addToCollection( 'Swimming', 'Mac Miller', '2018' ) );
console.log( addToCollection( 'The Very Best of the Eagles', 'Eagles', '2003' ) );
console.log( addToCollection( 'Trauma', 'I Prevail', '2019' ) );
console.log( addToCollection( 'Mr. Morale and the Big Steppers', 'Kendrick Lamar', '2022' ) );
console.log( 'My album collection is:', collection );

function showCollection( array ) {
    console.log( 'Number of records in collection:', array.length );
    for ( let i = 0; i < array.length; i++ ) {
        console.log( array[i].title, 'by', array[i].artist, 'published in', array[i].yearPuplished );
    }
}
showCollection( collection );

function findByArtist( artist ) {
    let recordsByArtist = [];
    for ( let i = 0; i < collection.length; i++ ) {
        if ( artist === collection[ i ].artist ) {
            recordsByArtist.push( collection[ i ] );
        } 
    }
    return recordsByArtist;
}
console.log( 'Records by Mac Miller:', findByArtist( 'Mac Miller' ) );
console.log( 'Records by Kendrick Lamar:', findByArtist( 'Kendrick Lamar' ) );
console.log( 'Records by Elvis Presley:', findByArtist( 'Elvis Presley' ) );