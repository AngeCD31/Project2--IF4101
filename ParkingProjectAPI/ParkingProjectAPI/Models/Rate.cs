using System;
using System.Collections.Generic;

namespace ParkingProjectAPI.Models
{
    public partial class Rate
    {
        public Rate()
        {
            Spots = new HashSet<Spot>();
        }

        public int Id { get; set; }
        public double HourRate { get; set; }

        public virtual ICollection<Spot> Spots { get; set; }
    }
}
