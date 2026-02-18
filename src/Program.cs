using  Microsoft.AspNetCore.Http;
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGet("/hello", (HttpRequest request)=>{
    var query = request.Query;
    var name = query["name"];
    return $"Hello to {name}";
} );



app.Run();
