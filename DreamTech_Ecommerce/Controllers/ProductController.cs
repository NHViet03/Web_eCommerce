﻿using DreamTech_Ecommerce.DAL;
using DreamTech_Ecommerce.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using System.Text.Json;

namespace DreamTech_Ecommerce.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly DreamAppContext _context;
        private readonly IWebHostEnvironment _environment;

        public ProductController(DreamAppContext context, IConfiguration configuration, IWebHostEnvironment environment)
        {

            _environment = environment;
            _configuration = configuration;
            _context = context;
        }

        [HttpGet("GetAll")]
        public IActionResult Index()
        {
            var products = _context.Products.Include(e => e.ProductImages).ToList();

            var jsonSerializerOptions = new JsonSerializerOptions
            {
                ReferenceHandler = ReferenceHandler.Preserve,
            };

            var json = JsonSerializer.Serialize(products, jsonSerializerOptions);

            return Content(json, "application/json");
        }

        [HttpPost("Create")]
        [Authorize(Roles = "Admin")]
        public IActionResult CreateProduct([FromForm] ProductViewModel model)
        {
            try
            {
                if (model.Image == null || model.Image.Length == 0)
                {
                    return BadRequest("Image is required.");
                }

                var imagePath = SaveImageToServer(model.Image);

                var newProduct = new Product
                {
                    Id = model.Id,
                    Brand = model.Brand,
                    Name = model.Name,
                    Description = model.Description,
                    Price = model.Price,
                    QtyInStock = model.QtyInStock,
                    CategoryId = model.CategoryId
                };

                var newProductImage = new ProductImage
                {
                    ImageUrl = imagePath,
                    ProductId = newProduct.Id
                };
                
                if (model.CategoryId != null)
                {
                    var category = _context.Categories.Find(model.CategoryId);
                    category.Products.Add(newProduct);
                }

                newProduct.ProductImages.Add(newProductImage);
                _context.Products.Add(newProduct);
                _context.SaveChanges();

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        private string SaveImageToServer(IFormFile image)
        {
            var projectRootPath = Directory.GetCurrentDirectory();
            var uploadFolder = Path.Combine(projectRootPath, "Uploads");

            if (!Directory.Exists(uploadFolder))
            {
                Directory.CreateDirectory(uploadFolder);
            }

            var fileName = Guid.NewGuid().ToString() + "_" + image.FileName;
            var filePath = Path.Combine(uploadFolder, fileName);

            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                image.CopyTo(fileStream);
            }

            return "/Uploads/" + fileName;
        }


        [HttpPost("UnassignFromCategory")]
        [Authorize(Roles = "Admin")]
        public IActionResult UnassignProductFromCategory(string productId)
        {
            var product = _context.Products.Find(productId);

            if (product == null)
            {
                return NotFound("Product not found");
            }

            product.Category = null;
            _context.SaveChanges();

            return Ok($"Product '{product.Name}' unassigned from any category");
        }
    }

    public class ProductViewModel
    {
        public string Id { get; set; }
        public string? Brand { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public int Price { get; set; }
        public int QtyInStock { get; set; }
        public string? CategoryId { get; set; }
        public IFormFile Image { get; set; }
    }
}