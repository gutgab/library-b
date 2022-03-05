const closeModal = document.querySelector(".close-modal")
const grid = document.querySelector(".grid");
const addBtn = document.getElementById("addBtn");
const addBookBtn = document.getElementById("addBook");
const modal = document.querySelector(".modal")
const titleInput = document.querySelector("input[name='title']");
const authorInput = document.querySelector("input[name='author']");
const pagesInput = document.querySelector("input[name='pages']");
const readInput = document.querySelector("select[name='read']");
const addMessage = document.getElementById("addMessage")
let myLibrary = [{title:"Lord of the rings",author:"J.R.R. Tolkien",pages:423, read:true, index:0},
{title:"The Call of Cthulhu",author:"H. P. Lovecraft",pages:420, read:false,index:1},
{title:"Project Hail Mary",author:"Andy Weir",pages:457, read:true,index:2}];

function Book(title,author,pages,read,index){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;

    this.info =()=>{
        return `${this.title} by ${this.author},  ${this.pages} pages,  ${this.read == true ? " read":" not read yet"}`;
    }
}

function addBook(title,author,pages,read,index){
    let obj = new Book(title,author,pages,read,index);
    myLibrary.push(obj);
}

function displayBooks(){
    grid.textContent="";
    myLibrary.forEach(book => {
        let div = document.createElement("div");
        let par = document.createElement("p");
        let divindex = document.createElement("div");
        let btndiv = createBookBtns();
        div.classList.add("book");
        par.innerText = `${book.title} by ${book.author},${book.pages} pages,${book.read == true ? "read":"not read yet"}`;
        divindex.textContent = book.index;
        divindex.style.display = "none";
        div.appendChild(divindex);
        div.appendChild(par);
        if(book.read==true){btndiv.firstChild.classList.add("readBook")}
        div.appendChild(btndiv);
        grid.appendChild(div);
    }
    );
}
function createBookBtns(){
    let readIcon = document.createElement("img");
    let deleteIcon = document.createElement("img");
    let bookBtns = document.createElement("div");
    readIcon.setAttribute("src","./assets/read-on.png");
    readIcon.setAttribute("alt","read");
    deleteIcon.setAttribute("src","/assets/delete.png");
    deleteIcon.setAttribute("alt","delte");
    bookBtns.appendChild(readIcon);
    bookBtns.appendChild(deleteIcon);
    readIcon.addEventListener("click",()=>{
        readIcon.classList.toggle("readBook");
        console.log(readIcon.parentElement.parentElement.firstChild.textContent);
        myLibrary.forEach(book=>{
            if (book.index == readIcon.parentElement.parentElement.firstChild.textContent){
                book.read == true ? book.read=false:book.read=true;
            }
        })
        displayBooks();
    })
    deleteIcon.addEventListener("click",()=>{
        myLibrary.forEach(book=>{
            if (book.index == deleteIcon.parentElement.parentElement.firstChild.textContent){
                myLibrary.splice(book.index,1);
            }
        })
        displayBooks();
    })
    return bookBtns;
}
addBtn.addEventListener("click",()=>{
    modal.style.display = "block";
})
addBookBtn.addEventListener("click",()=>{
    if(titleInput.value.length>2&&titleInput.value.length<30&&authorInput.value.length>2&&authorInput.value.length<30&&parseInt(pagesInput.value)>0){
        let readStatus;
        if (myLibrary.length==0){readStatus = 0;}
        else readStatus=myLibrary[myLibrary.length-1].index+1;
        addBook(titleInput.value,authorInput.value,pagesInput.value,readInput.value== 'true' ? true:false,readStatus);
        displayBooks();
        modal.style.display = "none";
        titleInput.value="";
        authorInput.value="";
        pagesInput.value="";
        addMessage.textContent="";
    }
    else addMessage.textContent="Title and Author must be 3 or more charactres and pages greater than zero"
})
closeModal.addEventListener("click",()=>{
    modal.style.display = "none";
    titleInput.value="";
    authorInput.value="";
    pagesInput.value="";
    addMessage.textContent="";
})


displayBooks(); 