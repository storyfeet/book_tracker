using  Microsoft.AspNetCore.Http;
using Microsoft.Data.Sqlite;
using static Book;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

var allowedOrigins = builder.Configuration.GetValue<string>("allowedOrigins")!.Split(",");
 
// B
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins(allowedOrigins).AllowAnyHeader().AllowAnyMethod();
    });
});


var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGet("/hello", (HttpRequest request)=>{
    var query = request.Query;
    var name = query["name"];
    return $"Hello to {name}";
} );

app.MapGet("/books", async(HttpRequest request)=>{
    var connection = new SqliteConnection("Data Source=database/demo1.sqlite");
    connection.Open();
    var cmd = connection.CreateCommand();
    cmd.CommandText = """
    SELECT * FROM books;
    """;
    SqliteDataReader reader = cmd.ExecuteReader();

    List<Book> books = new List<Book>();
    
    while (reader.Read()){
        var book = new Book(reader);
        books.Add(book);
    }
    connection.Close();

    string jsonString = JsonSerializer.Serialize(books);

    return jsonString;
});


 
app.UseHttpsRedirection();
 
// C
app.UseCors();
 
app.UseAuthorization();
 
app.MapControllers();
 
app.Run();
