function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info =()=>{
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read == true ? "read":"not read yet"}`;
    }
}
