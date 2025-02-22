'use client';

import { useState } from "react";
import styles from './CssHasView.module.scss';

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

interface Book {
    id: string;
    title: string;
}

const CssHasView = () => {
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

        const newBook = {
            id: `book-${Date.now()}`,
            title: newTitle
        };
        setBooks([newBook, ...books]);
    };

    const removeBook = () => {
        setBooks(books.slice(1));
    };

    // :TODO Add random different size
    // :TODO add random books rotation so its italic like

    return (
        <div className="flex flex-col  items-center gap-4">
            <h1 className="text-2xl font-bold">The Bookshelf</h1>
            <p>
                Learn CSS <code>:has()</code> from the{" "}
                <Link
                    href="https://ishadeed.com/article/css-has-guide/#adjacent-sibling-selector"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                >
                    Ishadeed post
                </Link>
                .
            </p>
            <div className="flex space-x-4">
                <button
                    onClick={addBook}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Add Book
                </button>
                <button
                    onClick={removeBook}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                >
                    Remove Book
                </button>
            </div>
            <div className={styles.shelf}>
                <AnimatePresence mode="popLayout">
                    {books.map((book) => (
                        <motion.div
                            layout
                            layoutId={book.id}
                            key={book.id}
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            className={`${styles.book} bg-gray-200 rounded p-2`}>
                            <p>{book.title}</p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default CssHasView;
