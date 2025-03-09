let client1 = {
    age: 25,
    name: 'John',
    address: {
        city: 'New York',
        street: 'Broadway'
    },   
}
let client2 = {
    age: 30,
    name: 'Mary',
    address: {
        city: 'Los Angeles',
        street: 'Hollywood'
    },
}

let client3 = {
    age: 20,
    name: 'Alice',
    address: {
        city: 'San Francisco',
        street: 'Market'
    },
}

function showClientInfo(data) {
    if (!data) return console.log(
        'nothing was passed'
    )

    console.log(data)
}
showClientInfo(client1)

var weddingDetails = Document.getElementByClassName('.details');
weddingDetails.innerHTML = {
    background: 'salmon',
    color: 'silver',

}