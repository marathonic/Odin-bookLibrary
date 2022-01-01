function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function(){
        if (read == 'not read') return `${title} by ${author}, ${pages} pages, ${read} yet`;
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
console.log(this.info());
}

const TuringsCathedral = new Book('Turings Cathedral', 'George Dyson', '464', 'not read');
TuringsCathedral.prototype = Object.create(Book.prototype);
//console.log(TuringsCathedral);

//WTF is wrong with the code below

let library = [];

function storeInLibrary(bookObj){
    library.push(bookObj);
    console.log(library);
    //return library;
}



storeInLibrary(TuringsCathedral);

function displayLibrary(){
    library.forEach(element => console.table(element));
}


// function displayLibrary(){
//     for(let book in library){
//         console.log(this.title);
//     }

// }

displayLibrary();