class BookClub{
    library;
    constructor(library){
        this.library = library;
        this.books = [];
        this.members = [];
    }
    addBook (title, author){
        let book = this.books.find(x => x.title == title);
        if (book) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`;
        } else {
            this.books.push({title, author});
            return `The book "${title}" by ${author} has been added to ${this.library} library.`;
        }
    }
    addMember (memberName) {
        let member = this.members.find(name => name == memberName);
        if (member) {
            return `Member ${memberName} is already a part of the book club.`;
        } else {
            this.members.push(memberName);
            return `Member ${memberName} has been joined to the book club.`;
        }
    }
    assignBookToMember (memberName, bookTitle) {
        let member = this.members.find(name => name == memberName);
        let book = this.books.find(x => x.title == bookTitle);
        if (!member) {
            throw new Error(`Member ${memberName} not found.`);
        }
        if (!book) {
            throw new Error(`Book "${bookTitle}" not found.`);
        } else {
            let bookIndex = this.books.findIndex(x => x.title == bookTitle);
            this.books.splice(bookIndex, 1);
            return `Member ${memberName} has been assigned the book "${book.title}" by ${book.author}.`;
        }
    }
    generateReadingReport (){
        let result = '';
        if (this.members.length == 0) {
            return "No members in the book club.";
        }
        if (this.books.length == 0) {
            return "No available books in the library.";
        } else {
            result = `Available Books in ${this.library} library:\n`;
            let booksArr = [];
            for (const {title, author} of this.books) {
                booksArr.push(`"${title}" by ${author}`);
            }
            result += booksArr.join('\n');
        }
        return result;
    }
}

// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Mary", "The Great Gatsby"));

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
console.log(myBookClub.generateReadingReport());

// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Peter", "The Da Vinci Code"));

// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Peter", "1984"));
// console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
// console.log(myBookClub.generateReadingReport());