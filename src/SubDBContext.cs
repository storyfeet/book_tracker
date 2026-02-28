using Microsoft.EntityFrameworkCore;
using Models;

public class SubDbContext : DbContext
{
    public SubDbContext(DbContextOptions<SubDbContext> options) : base(options)
    {
    }

    public DbSet<Book> Books {get;set;}
    public DbSet<BookAuthor> BookAuthors {get;set;}
    public DbSet<Author> Authors {get;set;}
    //public DbSet<Product> Products { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder){
        modelBuilder.Entity<BookAuthor>().HasKey(nameof(BookAuthor.BookId), nameof(BookAuthor.AuthorId));
    }
}


