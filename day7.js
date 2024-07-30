const book={
    title:"1984 Story",
    author:"George Orwell",
    year:1949,
    getTitle:function(){
        return book.title
    },
    getYear:function(year){
       return book.year=year
    },
    getALLinfo:function(){
        return `${this.title} ${this.author} ${this.year}`
    }

}
console.log(book)
console.log(book.title,book.author)
console.log(book.getTitle())
console.log(book.getYear(2023))
console.log(book.getALLinfo())

const library = {
  name: "The library",
  books: [
    { title: "1984",
      author: "George Orwell", 
      year: 1949 
    },
    { title: "The Catcher in the Rye", 
      author: "J.D. Salinger", 
      year: 1951 
    },
    { title: "The Great Gatsby", 
      author: "F. Scott Fitzgerald", 
      year: 1925 
    },
  ],
};

console.log(library);
console.log(library.name, library.books[0].title, library.books[1].title, library.books[2].title);
for(key in book){
    console.log(book[key])
}

const keys = Object.keys(library);
console.log(keys)
const valuess=Object.values(library);
console.log(valuess)