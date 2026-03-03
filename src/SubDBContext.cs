using Microsoft.EntityFrameworkCore;
using Models;

public class SubDbContext : DbContext
{
    public SubDbContext(DbContextOptions<SubDbContext> options) : base(options)
    {
    }

    public DbSet<Book> Books {get;set;}
    public DbSet<Contributor> Contributors {get;set;}
    public DbSet<Contribution> Contributions {get;set;}
    //public DbSet<Product> Products { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder){
        modelBuilder.Entity<Contribution>().HasKey(nameof(Contribution.BookId), nameof(Contribution.ContributorId));
    }
}


