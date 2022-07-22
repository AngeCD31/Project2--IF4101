using System;
using System.Collections.Generic;

namespace ParkingProjectAPI.Models
{
    public partial class Parking
    {
        public Parking()
        {
            Reservations = new HashSet<Reservation>();
            Spots = new HashSet<Spot>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string City { get; set; } = null!;
        public int Capacity { get; set; }
        public int AvailableSpace { get; set; }
        public int OccupiedSpace { get; set; }

        public virtual ICollection<Reservation> Reservations { get; set; }
        public virtual ICollection<Spot> Spots { get; set; }
    }
}
