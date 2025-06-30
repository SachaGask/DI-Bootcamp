// Book Interface //

interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string
}

// Define Book LIbrary Interface //

interface BookLibrary {
  addBook(book: Book): void;
  getBookDetails(isbn: string): string;
  getBooks(): Book[]
}

// Library Class //

class Library implements BookLibrary {
  private books: Book[]

  constructor() {
    this.books = []
  }
  public addBook(book: Book): void {
    this.books.push(book)
  }
  public getBookDetails(isbn: string): string {
    const book = this.books.find(b => b.isbn === isbn)
    if (book) {
      return `${book.title}, ${book.author}, ISBN: ${book.isbn}, Published: ${book.publishedYear}${book.genre ? ', Genre: ' + book.genre : ''}`;
    }
  }
  public getBooks(): Book[] {
    return [...this.books];
  }
}

// Digital Library Class //

class DigitalLibrary extends Library {
  public readonly website: string;
  constructor(website: string){
    super();
    this.website = website
  }
  public listBooks(): string[] {
    return this.getBooks().map((book) => book.title);
  }
}

const myLibrary = new DigitalLibrary("https://mylibrary.com");

// Add book //
myLibrary.addBook({
  title: "The Great Bomb",
  author: "Donald Trump",
  isbn: "USA",
  publishedYear: 2025,
  genre: "World War III"
})

myLibrary.addBook({
  title: "The Great Peace",
  author: "Macron",
  isbn: "Frankistan",
  publishedYear: 2027,
  genre: "Fiction"
})

console.log(myLibrary.listBooks());

