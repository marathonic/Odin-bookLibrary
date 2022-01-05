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

let paraBooky = document.createElement('p');

let collection = document.createDocumentFragment();
        
showLib.addEventListener('click', function(){
  
    // let result = araAra.flatMap(Object.keys);
    // console.log('RESULT RETURNS: ');
    // console.log(result);
    

    for(let i = 0; i < araAra.length; i++){

        let newBooky = document.createElement('div');
        newBooky.id = 'bk' + i;
        paraBooky.innerText = `${araAra[i].title} \n ${araAra[i].author}`;
        paraBooky.prototype = Object.create(Book.prototype);
        //paraBooky.style.className = 'paraBooky';
        newBooky.className = 'shelfDivs';
        newBooky.append(paraBooky.innerText);
        collection.appendChild(newBooky);

    }

    document.getElementById('libContainer').appendChild(collection);
    
    
    // araAra.forEach(bk){
    //     let collection = document.createElement('p').value = bk;
    //     collection.
    // }

    function removePropFromObject(araAra, title) {
        const { [title]: _, ...rest } = araAra
        return { ...rest }
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