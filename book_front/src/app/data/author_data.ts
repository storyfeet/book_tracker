import { Book } from "./book_data";

export interface Author{
    FullName: string;
    Id: number;
    Notes: string;
    Genres: string;
}

export interface NewAuthor{
    FullName: string;
    Notes: string;
    Genres: string;
}


export interface BookAuthor{
    book: Book,
    authors: Author[],
}