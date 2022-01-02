let title = document.getElementById('title');
let author = document.getElementById('author');
let submit = document.getElementById('submitBtn');

class Book {
    constructor(title, author) {
        this.title = title
        this.author = author
    }
}

let araAra = [];
    

submit.addEventListener('click', function(){
    
    // araAra.push(title.value);
    // araAra.push(author.value);

    const newEntry = new Book(title.value,  author.value);

    araAra.push(newEntry);
    console.table(araAra);

    let bookCover = document.createElement('datalist').className = 'cover';
    bookCover = newEntry;
    //console.log(newEntry.title, newEntry.author);

    }
)

function showOff(){

}
