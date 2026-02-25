namespace Models;

using Microsoft.Data.Sqlite;

public class Book {
    public long Id {get;set;}
    public string Title {get; set;}
    public string Link {get;set;}

    public Book(long Id, string Title , string Link ){
        this.Id = Id;
        this.Title = Title;
        this.Link = Link;
    }

    // If select *
    public Book(SqliteDataReader reader ){
        this.Id = int.Parse(reader.GetString(0));
        this.Title = reader.GetString(1);
        this.Link = reader.GetString(2);
    }

}

