using Microsoft.EntityFrameworkCore;
using ProductApi.Models;

namespace ProductApi.Data
{
    public class AppDbContext : DbContext
    {
        // DbContext constructor: DB bağlantısı burada konfigüre ediliyor
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // Product tablosu için DbSet
        public DbSet<Product> Products { get; set; }
    }
}
