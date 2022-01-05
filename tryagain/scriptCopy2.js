let title = document.getElementById('title');
let author = document.getElementById('author');
let submit = document.getElementById('submitBtn');
let showLib = document.getElementById('showLibBtn');
let libbyContainer = document.getElementById('libContainer');

class Book {
    constructor(title, author) {
        this.title = title
        this.author = author
    }
}

let araAra = [];

let bookCover = document.createElement('p');

function shallowEqual(object1, object2){
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if(keys1.length !== keys2.length){
        return false;
    }
    for (let key of keys1){
        if(object1[key] !== object2[key])   {
            return false;
        }
    }
    return true;
}


let collection = document.createDocumentFragment();


submit.addEventListener('click', function(){
    
    const newEntry = new Book(title.value,  author.value);

    if(araAra.some(item => shallowEqual(item, newEntry))){
        return false;
    }

    else if(!araAra.some(item => shallowEqual(item, newEntry))){
        araAra.push(newEntry);
    }

    console.table(araAra);


    //this gives us the latest Book object, 

    bookCover = newEntry;
    console.log('bookCover yields: ')
    console.log(bookCover);

    let doccu = document.createDocumentFragment();


    araAra.forEach(element => {
        let pars = document.createElement('p');
        let pars2 = document.createElement('p');
        pars.innerHTML = element.title;
        pars2.innerHTML = element.author;
        if(!libbyContainer.contains(pars)){
            libbyContainer.appendChild(pars);
            libbyContainer.appendChild(pars2);
            console.log(pars);
            console.log(pars2);
            araAra.splice(element);
        }
    })


    }
)

let libArr = [];

showLib.addEventListener('click', function(){

  
})
