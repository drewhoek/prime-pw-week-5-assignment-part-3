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
console.log( collection );