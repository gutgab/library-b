let readIcon = document.createElement("img");
let favIcon = document.createElement("img");
let deleteIcon = document.createElement("img");
let myLibrary = [];
let bookBtns = document.createElement("div");
let grid = document.querySelector(".grid");

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info =()=>{
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read == true ? "read":"not read yet"}`;
    }
}

function addBook(title,author,pages,read){
    let obj = new Book(title,author,pages,read);
    myLibrary.push(obj);
}

function displayBooks(){
    let fragment = new DocumentFragment();
    myLibrary.forEach(book => {
        let div = document.createElement("div");
        let par = document.createElement("p");
        div.classList.add("book");
        par.innerText = `${book.title} by ${book.author},${book.pages} pages,${book.read == true ? "read":"not read yet"}`;
        div.appendChild(par);
        div.appendChild(bookBtns);
        grid.appendChild(div);
    }
    );
}

readIcon.setAttribute("src","./assets/read-on.png");
readIcon.setAttribute("alt","read");
favIcon.setAttribute("src","/assets/star-plus-outline.png");
favIcon.setAttribute("alt","fav");
deleteIcon.setAttribute("src","/assets/delete.png");
deleteIcon.setAttribute("alt","delte");
bookBtns.appendChild(readIcon);
bookBtns.appendChild(favIcon);
bookBtns.appendChild(deleteIcon);
