// library.js

// Step 1: Create the Book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
    }

    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} has been borrowed.`);
        } else {
            console.log(`${this.title} is currently unavailable.`);
        }
    }

    returnBook() {
        this.isAvailable = true;
        console.log(`${this.title} has been returned.`);
    }
}

// Step 2: Create the User class
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = [];
    }

    borrow(book) {
        if (book.isAvailable) {
            book.borrowBook();
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed "${book.title}".`);
        } else {
            console.log(`${this.name} cannot borrow "${book.title}" as it is unavailable.`);
        }
    }

    return(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            book.returnBook();
            this.borrowedBooks.splice(index, 1);
            console.log(`${this.name} returned "${book.title}".`);
        } else {
            console.log(`${this.name} does not have "${book.title}" to return.`);
        }
    }
}

// Step 3: Test the System
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "123456789");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "987654321");

const user1 = new User("Alice", 1);
const user2 = new User("Bob", 2);

// Testing borrowing and returning process
user1.borrow(book1); // Alice borrows The Great Gatsby
user2.borrow(book1); // Bob tries to borrow The Great Gatsby (should be unavailable)
user1.return(book1); // Alice returns The Great Gatsby
user2.borrow(book1); // Bob borrows The Great Gatsby
user2.return(book1); // Bob returns The Great Gatsby
