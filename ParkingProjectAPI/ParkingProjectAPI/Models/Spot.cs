using System;
using System.Collections.Generic;

namespace ParkingProjectAPI.Models
{
    public partial class Spot
    {
        public Spot()
        {
            Reservations = new HashSet<Reservation>();
        }

        public int Id { get; set; }
        public int? ParkingId { get; set; }
        public int Number { get; set; }
        public string Preferential { get; set; } = null!;
        public string? Available { get; set; }
        public int RateId { get; set; }

        public virtual Parking? Parking { get; set; }
        public virtual Rate Rate { get; set; } = null!;
        public virtual ICollection<Reservation> Reservations { get; set; }
    }
}
