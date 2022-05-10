// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    

    if (value === '') {
        console.log('não tem valor')
        delete (records)[id][prop]
    } else if ((records)[id].hasOwnProperty([prop])) {
        console.log('tem propriedade')
        records[id][prop].push(value)
    } else {
        console.log('não tem propriedade')
        if((prop)==="tracks"){
            records[id][prop] = ([value])
        }else{
            records[id][prop] = (value) 
        }
        
    }    
}

console.table(recordCollection)
updateRecords(recordCollection, 5439, "artist", "ABBA")
console.table(recordCollection)
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
console.table(recordCollection)
updateRecords(recordCollection, 2548, "artist", "")
console.table(recordCollection)
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")
console.table(recordCollection)
updateRecords(recordCollection, 2468, "tracks", "Free")
console.table(recordCollection)
updateRecords(recordCollection, 2548, "tracks", "")
console.table(recordCollection)
updateRecords(recordCollection, 1245, "albumTitle", "Riptide")
console.table(recordCollection)