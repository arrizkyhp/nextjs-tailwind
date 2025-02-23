import {useState} from "react";
import {Book} from "./CssHasView.types";

const useCssHasView = () => {
    const [books, setBooks] = useState<Book[]>([]);

    const bookTitles = [
        "Harry Potter",
        "Filosofi Teras",
        "The Little Prince",
        "Law of UX",
        "Atomic Habits",
        "Make it stick",
        "Steal Like an Artist",
        "Game of Throne",
        "Debugging CSS",
        "Dark Places",
        "Sharp Object",
    ];

    const getRandomUniqueTitle = () => {
        const existingTitles = new Set(books.map(book => book.title));
        const availableTitles = bookTitles.filter(title => !existingTitles.has(title));

        if (availableTitles.length === 0) {
            return null;
        }

        return availableTitles[Math.floor(Math.random() * availableTitles.length)];
    };

    const addBook = () => {
        if (books.length >= 9) {
            return setBooks(books);
        }

        const newTitle = getRandomUniqueTitle();
        if (!newTitle) {
            return; // Don't add a book if no unique titles are available
        }

        // There's 30%  change book is bestseller
        const isBestSeller = Math.random() < 0.3;

        const newBook = {
            id: `book-${Date.now()}`,
            title: newTitle,
            isBestSeller
        };
        setBooks([newBook, ...books]);
    };

    const removeBook = () => {
        setBooks(books.slice(1));
    };

    return {
        addBook,
        books,
        removeBook,
    }
}

export default useCssHasView;
