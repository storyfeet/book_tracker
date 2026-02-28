using  Microsoft.AspNetCore.Http;
using Microsoft.Data.Sqlite;
using Models;
using static SubDbContext;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using LinqKit;

const string SUCCESS = """{"success":"true"}""";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<SubDbContext>(options=>{
    options.UseSqlite("Data Source=database/books.db");
});

var allowedOrigins = builder.Configuration.GetValue<string>("allowedOrigins")!.Split(",");
 

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
app.MapPost("/books/add",async(
        SubDbContext context,
        [FromBody] Book book
    )=>{
        context.Books.Add(book);
        await context.SaveChangesAsync();
        return SUCCESS;
    }
);

app.MapPost("/authors/add",async(
    SubDbContext context, 
    [FromBody] Author author
    ) =>{
        context.Authors.Add(author);
        await context.SaveChangesAsync();
        return SUCCESS;
    }
);

app.MapGet("/books", async(SubDbContext context,[FromQuery] string filter)=>{

    var predicate = PredicateBuilder.New<Book>()
        .Or((p)=>p.Title.Contains(filter))
        .Or((p)=>p.Notes.Contains(filter));
    

    var books = await context.Books
        .Where(predicate)
        .ToListAsync();

    string jsonString = JsonSerializer.Serialize(books);

    return jsonString;
});

app.MapGet("/authors", async(SubDbContext context,[FromQuery] string filter)=>{

    var predicate = PredicateBuilder.New<Author>()
        .Or((p)=>p.FullName.Contains(filter))
        .Or((p)=>p.Notes.Contains(filter))
        .Or((p)=>p.Genres.Contains(filter));
    

    var authors = await context.Authors
        .Where(predicate)
        .ToListAsync();

    string jsonString = JsonSerializer.Serialize(authors);

    return jsonString;
});

 
app.UseHttpsRedirection();
 

app.UseCors();
 
app.UseAuthorization();
 
app.MapControllers();
 
app.Run();
