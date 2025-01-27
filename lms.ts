enum Category{
    Fiction="Fiction",
    NonFiction="Non-Fiction",
    Science="Science",
    History="History",
    Children="Children"
}

interface Book{
    id:number;
    title:string;
    author:string;
    category:Category;
    isAvailable:boolean;
}

class Library {
    private books:Book[]=[];

    addBook(book:Book):void{
        if (this.books.some(b=>b.id===book.id)) {
            console.log(`Book with ID ${book.id} already exists.`);
            return;
        }
        this.books.push(book);
        console.log(`Book "${book.title} added successfully"`);
    }

    listBooks():Book[]{
        console.log("Library Books:");
        return this.books;
    }

    searchByTitle(title: string): Book | undefined {
        const result = this.books.find(book => book.title.toLowerCase().includes(title.toLowerCase()));
        if (result) {
            console.log(`ID ${result.id}`);
        } else {
            console.log('not found');
        }
        return result;
    }
    
}

