namespace Models;

using Microsoft.Data.Sqlite;

public class Book {
    public string Id {get;set;}
    public string Title {get; set;}
    public string Link {get;set;}

    // If select *
    public Book(SqliteDataReader reader ){
        this.Id = reader.GetString(0);
        this.Title = reader.GetString(1);
        this.Link = reader.GetString(2);
    }

}

