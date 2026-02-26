namespace Models;

using Microsoft.Data.Sqlite;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Author{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long? Id {get;set;}
    public string FullName {get;set;} = string.Empty;
    public string Notes {get;set;} = string.Empty;
    public string Genres {get;set;} = string.Empty;
}