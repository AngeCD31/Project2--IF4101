using System;
using System.Collections.Generic;

namespace ParkingProjectAPI.Models
{
    public partial class Vehicle
    {
        public Vehicle()
        {
            Reservations = new HashSet<Reservation>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Color { get; set; } = null!;
        public string Type { get; set; } = null!;
        public int ClientId { get; set; }

        public virtual User Client { get; set; } = null!;
        public virtual ICollection<Reservation> Reservations { get; set; }
    }
}
