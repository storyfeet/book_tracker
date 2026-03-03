import { Book } from "./book_data";

export interface Contributor{
    FullName: string;
    Id: number;
    Notes: string;
}

export interface NewContributor{
    FullName: string;
    Notes: string;
}

export interface Contribution{
    Contributor:Contributor,
    Kind:string,
}

export interface BookContributions{
    book: Book,
    contributions: Contribution[],
}