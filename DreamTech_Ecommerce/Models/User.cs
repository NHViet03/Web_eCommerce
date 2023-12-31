﻿using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace DreamTech_Ecommerce.Models
{
    public enum Role
    {
        Admin=0, Customer=1
    }
    public enum Gender
    {
        Male = 0, Female = 1
    }
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public Role Role { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string? Address { get; set; }
        public int? Gender { get; set; }
        public string? HashedPassword { get; set; }
        public DateTime? Birthday { get; set; }
        public DateTime? CreatedDate { get; set; }

        [Required]
        [MaxLength(16)]
        [Column(TypeName = "varbinary(16)")] // Specify the column type for the salt
        public byte[] Salt { get; set; }
        public ICollection<CartItem> Carts { get; } = new List<CartItem>();
        public ICollection<Order> Orders { get; } = new HashSet<Order>();
    }
}
