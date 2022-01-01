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

// let library = [];

// function storeInLibrary(bookObj){
//     library.push(bookObj);
//     console.log(library);
// }



// storeInLibrary(TuringsCathedral);

// function displayLibrary(){
//     library.forEach(element => console.table(element));
// }

// const harryPotter = new Book("Harry Potter and the sorcerer's stone", "J.K. Rowling", "223", "read");
// //harryPotter.prototype = Object.create(Book.prototype);
// storeInLibrary(harryPotter);

// displayLibrary();

//making functions for the JavaScript form

function popupForm(){
    document.getElementById('formDiv').style.display='block';
}

function closeForm(){
    document.getElementById('formDiv').style.display='none';
}


//implementing the library with html divs:
let library = [];

function storeInLibrary(bookObj){
    library.push(bookObj);
    console.log(library);
}

storeInLibrary(TuringsCathedral);

function displayLibrary(){
    library.forEach(element => console.table(element));
}

const harryPotter = new Book("Harry Potter and the sorcerer's stone", "J.K. Rowling", "223", "read");
storeInLibrary(harryPotter);

displayLibrary();

//OUR CODE WORKS SO FAR! It's logging the library to the console. 
//We need to have the Submit button inside our #newBook div create a div with the details of each -new Book object-



//next we'll be putting the books in the library on a wooden shelf, but that's finishing touches

const shelf = document.getElementById('shelf');
function showShelf(){
    shelf.style.display = 'block';
}
function closeShelf(){
    shelf.style.display = 'none';
}