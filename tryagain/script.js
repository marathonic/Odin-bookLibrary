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


submit.addEventListener('click', function(){
    
    // araAra.push(title.value);
    // araAra.push(author.value);

    const newEntry = new Book(title.value,  author.value);

    araAra.push(newEntry);
    console.table(araAra);


    //this gives us the latest Book object, 

    //let bookCover = document.createElement('p').className = 'cover';
    bookCover = newEntry;
    console.log('bookCover yields: ')
    console.log(bookCover);
    //console.log(newEntry.title, newEntry.author);

    }
)

let textyPara = document.createElement('p');

showLib.addEventListener('click', function(){
    
    let bookShelf = document.createDocumentFragment();
    for(let i = 0; i < araAra.length; i++){
        let newBooky = document.createElement('div');
        newBooky.id = 'bk' + i;
        
        textyPara.value = araAra[i];
        textyPara.className = 'textyPara';
        bookShelf.appendChild(textyPara);
    //newBooky.value = araAra[i];
        newBooky.className = 'shelfDivs';
        bookShelf.appendChild(newBooky);

    }
    document.getElementById('libContainer').appendChild(bookShelf);
    document.getElementById('libContainer').appendChild(textyPara);
    // araAra.forEach(bk){
    //     let collection = document.createElement('p').value = bk;
    //     collection.
    // }
})

// function showOff(){

// }
