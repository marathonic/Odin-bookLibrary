let title = document.getElementById('title');
let author = document.getElementById('author');
let submit = document.getElementById('submitBtn');
let showLib = document.getElementById('showLibBtn');

class Book {
    constructor(title, author) {
        this.title = title
        this.author = author
    }
}

let araAra = [];

let bookCover = document.createElement('p');

let myLib = [];

//DO NOT OUTPUT THE BOOKS TO MYLIBRARY YET, JUST ADD THEM TO OUR ARRAY, THEN WHEN WE PRESS SHOWLIBRARY, FOREACH BOOK IN ARR, DISPLAY IT!


const newEntry = new Book(title.value,  author.value);

submit.addEventListener('click', function(){

    araAra.push(newEntry);
    console.table(araAra);
    
    // function notRepeats(bky){
    //     return bky !== bookCover;
    // };

    // let filteredCover = araAra.filter(notRepeats);

    // myLib.push(filteredCover);
 
    }
)

let paraBooky = document.createElement('p');

let collection = document.createDocumentFragment();
        
showLib.addEventListener('click', function(){
    console.log('!!!!!!!!!!!THIS IS OUR SHOWLIB FUNCTION OUTPUT:')
    for (let key of Object.keys(newEntry)){
        console.log(`${key}: ${newEntry[key]}`)
    }

})

// function showOff(){

// }


// for(let i = 0; i < araAra.length; i++){
//     console.log(araAra[i].)
// }

//we could also just do: if(araAra[0] === library[0] araAra.splice(); that way we wont log it bc its not there anymore)

//or maybe just produce the div each time we click Add book! and add it to the library, 
//then before closing the function we make it empty
//then when we click Show library! we make the library visible



//





//this was inside showLib() but let's wait and see :

    // document.getElementById('libraryBlock').classList.toggle('showHide');

    // araAra.forEach(bk){
    //     let collection = document.createElement('p').value = bk;
    //     collection.
    // }