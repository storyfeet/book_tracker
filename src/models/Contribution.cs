namespace Models;

using Microsoft.Data.Sqlite;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public enum ContributionType{
    Author,
    Illustrator,
    Other,
}


public class Contribution{
    //Book and Author make a composite primary key
    [ForeignKey("Book")]
    public required long BookId {get;set;}
    public Book? Book{get;set;}

    [ForeignKey("Author")]
    public required long ContributorId{get;set;}
    public Contributor? Contributor{get;set;}

    public ContributionType Kind{get;set;}
}