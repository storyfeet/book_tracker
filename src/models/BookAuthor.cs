namespace Models;

using Microsoft.Data.Sqlite;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class BookAuthor{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long? Id {get;set;}
    [ForeignKey("Book")]
    public required long BookId {get;set;}
    public Book? Book{get;set;}

    [ForeignKey("Author")]
    public required long AuthorId{get;set;}
    public Author? Author{get;set;}
}