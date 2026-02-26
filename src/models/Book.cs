namespace Models;

using Microsoft.Data.Sqlite;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Book {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long? Id {get;set;}
    public string Title {get; set;} = string.Empty;
    public string Link {get;set;} = string.Empty;

}


