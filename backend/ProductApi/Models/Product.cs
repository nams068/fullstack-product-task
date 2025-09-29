namespace ProductApi.Models
{
    public class Product
    {
        public int Id { get; set; }          // Primary key
        public string Name { get; set; }     // Ürün adı
        public decimal Price { get; set; }   // Ürün fiyatı
        public int Stock { get; set; }       // Stok adedi
        public string? image { get; set; }   // Ürün resmi URL'si
    }
}
