using Microsoft.EntityFrameworkCore;

public class SubDbContext : DbContext
{
    public SubDbContext(DbContextOptions<SubDbContext> options) : base(options)
    {
    }

    //public DbSet<Product> Products { get; set; }
}


