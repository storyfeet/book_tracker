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

export interface NewContribution{
    ContributorId:number,
    BookId:number,
    Kind:string,
}

export interface Contribution{
    Contributor:Contributor,
    Kind:string,
}

export interface BookContributions{
    book: Book,
    contributions: Contribution[],
}

// Creation is something an author/illustrator had a part in making.
// It is the opposite direction on the same join as Contribution.
export interface Creations{
    Contributor: Contributor,
    Creations: Creation[],
}

export interface Creation{
    Book: Book,
    ContributionKind: string,
}



