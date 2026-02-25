using  Microsoft.AspNetCore.Http;
using Microsoft.Data.Sqlite;
using Models;
using static SubDbContext;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<SubDbContext>(options=>{
    options.UseSqlite("Data Source=database/books.db");
});

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

//Get for now for easy browser work,
app.MapGet("/books/add",async(
        SubDbContext context,
        [FromQuery] string Id,
        [FromQuery] string Title,
        [FromQuery] string Link
    )=>{
        var book = new Book(Id:long.Parse(Id),Title:Title,Link:Link);
        context.Books.Add(book);
        await context.SaveChangesAsync();
        return """{"success":"true"}""";
    }
);

app.MapGet("/books", async(SubDbContext context,HttpRequest request)=>{

    var books = context.Books.ToList();

    string jsonString = JsonSerializer.Serialize(books);

    return jsonString;
});


 
app.UseHttpsRedirection();
 
// C
app.UseCors();
 
app.UseAuthorization();
 
app.MapControllers();
 
app.Run();
