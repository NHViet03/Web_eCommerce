using System.ComponentModel.DataAnnotations;

namespace DreamTech_Ecommerce.Models
{
    public class PaymentMethod
    {
        [Key]
        public string Id { get; set; }
        public string Name { get; set; }
        public ICollection<Payment> Payments { get; } = new List<Payment>();
    }
}
