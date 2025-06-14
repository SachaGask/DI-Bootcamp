interface Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string;
}

class Library {
    private books: Set<Book>;

    constructor() {
        this.books = new Set<Book>();
    }

    public addBook(book: Book): void {
        this.books.add(book);
    }

    public getBookDetails(isbn: string): string | undefined {
        const book = Array.from(this.books).find(b => b.isbn === isbn);
        if (book) {
            return `Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Published: ${book.publishedYear}${book.genre ? ', Genre: ' + book.genre : ''}`;
        }
        return undefined;
    }

    protected getAllBooks(): Book[] {
        return Array.from(this.books);
    }
}

class DigitalLibrary extends Library {
    readonly website: string;

    constructor(website: string) {
        super();
        this.website = website;
    }

    public listBooks(): string[] {
        return this.getAllBooks().map(book => book.title);
    }
}

// Création d'une instance de DigitalLibrary
const myDigitalLibrary = new DigitalLibrary("https://mylibrary.com");

// Ajout de livres
myDigitalLibrary.addBook({title: "Nobody", author: "Julie Smith", isbn: "978-02", publishedYear: 2015});
myDigitalLibrary.addBook({title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", isbn: "978-01", publishedYear: 1943, genre: "Fiction"});

// Affichage des détails d'un livre
console.log(myDigitalLibrary.getBookDetails("978-02"));
console.log(myDigitalLibrary.getBookDetails("978-01"));

// Affichage de la liste des titres
console.log("Liste des livres:", myDigitalLibrary.listBooks());
