using System;
using System.Collections.Generic;

namespace ParkingProjectAPI.Models
{
    public partial class User
    {
        public User()
        {
            Reservations = new HashSet<Reservation>();
            Vehicles = new HashSet<Vehicle>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public int RolId { get; set; }

        public virtual Rol Rol { get; set; } = null!;
        public virtual ICollection<Reservation> Reservations { get; set; }
        public virtual ICollection<Vehicle> Vehicles { get; set; }
    }
}
