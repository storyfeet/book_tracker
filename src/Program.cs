using  Microsoft.AspNetCore.Http;
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


 
app.UseHttpsRedirection();
 
// C
app.UseCors();
 
app.UseAuthorization();
 
app.MapControllers();
 
app.Run();
