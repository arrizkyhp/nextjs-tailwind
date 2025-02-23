'use client';

import styles from './CssHasView.module.scss';

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import useCssHasView from "@/features/labs/css-has/view/CssHasView/CssHasView.hooks";



const CssHasView = () => {
    const {
        addBook,
        books,
        removeBook,
     } = useCssHasView();

    // :TODO Add random different size
    // :TODO add random books rotation so its italic like

    // If book has more than 4, display change from column to row reverse
    // add spacing where book are 3 and display row reverse
    // add has() css if book children has .bestSeller div


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
                            initial={{opacity: 0, y: -20, filter: "blur(2px)"}}
                            animate={{opacity: 1, y: 0, filter: "blur(0)"}}
                            exit={{opacity: 0, y: -20, filter: "blur(2px)"}}
                            className={`${styles.book} bg-gray-200 rounded p-2`}
                        >
                            {book.isBestSeller && <div className={styles.bestSeller} />}
                            <p>{book.title}</p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default CssHasView;
