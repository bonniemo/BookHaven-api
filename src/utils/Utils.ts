import { ReadBook } from "../types/Types"

export type CalcTotalType = (book: ReadBook) => number

export const calculateTotal = (books: ReadBook[], getValue: CalcTotalType): number => {
    return books.reduce((total, book) => total + getValue(book), 0)
}