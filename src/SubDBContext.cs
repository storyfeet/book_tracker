using Microsoft.EntityFrameworkCore;
using Models;

public class SubDbContext : DbContext
{
    public SubDbContext(DbContextOptions<SubDbContext> options) : base(options)
    {
    }

    public DbSet<Book> Books {get;set;}
    //public DbSet<Product> Products { get; set; }
}


