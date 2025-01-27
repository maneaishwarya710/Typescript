var Category;
(function (Category) {
    Category["Fiction"] = "Fiction";
    Category["NonFiction"] = "Non-Fiction";
    Category["Science"] = "Science";
    Category["History"] = "History";
    Category["Children"] = "Children";
})(Category || (Category = {}));
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        if (this.books.some(function (b) { return b.id === book.id; })) {
            console.log("Book with ID ".concat(book.id, " already exists."));
            return;
        }
        this.books.push(book);
        console.log("Book \"".concat(book.title, " added successfully\""));
    };
    Library.prototype.listBooks = function () {
        console.log("Library Books:");
        return this.books;
    };
    Library.prototype.searchByTitle = function (title) {
        var result = this.books.find(function (book) { return book.title.toLowerCase().includes(title.toLowerCase()); });
        if (result) {
            console.log("ID ".concat(result.id));
        }
        else {
            console.log('not found');
        }
        return result;
    };
    return Library;
}());
