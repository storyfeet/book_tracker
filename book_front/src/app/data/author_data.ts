import { Book } from "./book_data";

export interface Author{
    FullName: string;
    Id: number;
    Notes: string;
}

export interface NewAuthor{
    FullName: string;
    Notes: string;
}


export interface BookAuthor{
    book: Book,
    authors: Author[],
}