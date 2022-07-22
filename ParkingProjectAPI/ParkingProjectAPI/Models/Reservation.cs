using System;
using System.Collections.Generic;

namespace ParkingProjectAPI.Models
{
    public partial class Reservation
    {
        public int Id { get; set; }
        public int ParkingId { get; set; }
        public int UserId { get; set; }
        public int SpotId { get; set; }
        public string Date { get; set; } = null!;
        public string CheckinTime { get; set; } = null!;
        public string CheckoutTime { get; set; } = null!;
        public int? VehicleId { get; set; }
        public double TotalRate { get; set; }

        public virtual Parking Parking { get; set; } = null!;
        public virtual Spot Spot { get; set; } = null!;
        public virtual User User { get; set; } = null!;
        public virtual Vehicle? Vehicle { get; set; }
    }
}
