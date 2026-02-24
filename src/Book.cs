using Microsoft.Data.Sqlite;

public class Book {
    public string title {get; set;}
    public string id {get;set;}
    public string link {get;set;}

    // If select *
    public Book(SqliteDataReader reader ){
        this.id = reader.GetString(0);
        this.title = reader.GetString(1);
        this.link = reader.GetString(2);
    }

}

