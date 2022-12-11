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