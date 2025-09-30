using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductApi.Data;
using ProductApi.Models;

namespace ProductApi.Controllers
{
    [ApiController]
    [Route("products")]
    public class ProductsController : ControllerBase
    {
        private readonly AppDbContext _context;

        // DB bağlantısı için context kullanılıyor
        public ProductsController(AppDbContext context)
        {
            _context = context;
        }

        // Tüm ürünleri listeler
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

        // Yeni ürün ekler
        [HttpPost]
        public async Task<ActionResult<Product>> CreateProduct([FromBody] Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            // Yeni eklenen ürünü döndürür
            return CreatedAtAction(nameof(GetProducts), new { id = product.Id }, product);
        }

    }
}
