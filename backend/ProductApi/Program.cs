using Microsoft.EntityFrameworkCore;
using ProductApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers(); // Controllers eklenmeli
builder.Services.AddEndpointsApiExplorer(); // Swagger için
builder.Services.AddSwaggerGen(); // Swagger

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// ----------------- CORS EKLENDİ -----------------
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());
});
// --------------------------------------------

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger(); // Swagger açılıyor
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Product API V1");
    });
}

app.UseHttpsRedirection();

app.UseCors("AllowAll"); // <-- CORS middleware

app.UseAuthorization();

app.MapControllers(); // Controller endpointlerini kullandım.

app.Run();
