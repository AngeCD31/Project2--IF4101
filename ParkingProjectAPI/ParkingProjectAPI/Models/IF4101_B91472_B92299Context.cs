using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ParkingProjectAPI.Models
{
    public partial class IF4101_B91472_B92299Context : DbContext
    {
        public IF4101_B91472_B92299Context()
        {
        }

        public IF4101_B91472_B92299Context(DbContextOptions<IF4101_B91472_B92299Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Parking> Parkings { get; set; } = null!;
        public virtual DbSet<Rate> Rates { get; set; } = null!;
        public virtual DbSet<Reservation> Reservations { get; set; } = null!;
        public virtual DbSet<Rol> Rols { get; set; } = null!;
        public virtual DbSet<Spot> Spots { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;
        public virtual DbSet<Vehicle> Vehicles { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=163.178.173.148;Initial Catalog=IF4101_B91472_B92299;User ID=lenguajes;Password=lg.2022zx");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Parking>(entity =>
            {
                entity.ToTable("Parking");

                entity.Property(e => e.City).HasMaxLength(20);

                entity.Property(e => e.Name).HasMaxLength(25);
            });

            modelBuilder.Entity<Rate>(entity =>
            {
                entity.ToTable("Rate");
            });

            modelBuilder.Entity<Reservation>(entity =>
            {
                entity.ToTable("Reservation");

                entity.Property(e => e.CheckinTime).HasMaxLength(5);

                entity.Property(e => e.CheckoutTime).HasMaxLength(5);

                entity.Property(e => e.Date).HasMaxLength(10);

                entity.HasOne(d => d.Parking)
                    .WithMany(p => p.Reservations)
                    .HasForeignKey(d => d.ParkingId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Reservation_Parking");

                entity.HasOne(d => d.Spot)
                    .WithMany(p => p.Reservations)
                    .HasForeignKey(d => d.SpotId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Reservation_Spot");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Reservations)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Reservation_User");

                entity.HasOne(d => d.Vehicle)
                    .WithMany(p => p.Reservations)
                    .HasForeignKey(d => d.VehicleId)
                    .HasConstraintName("FK_Reservation_Vehicle");
            });

            modelBuilder.Entity<Rol>(entity =>
            {
                entity.HasKey(e => e.IdRol);

                entity.ToTable("Rol");

                entity.Property(e => e.IdRol).ValueGeneratedNever();

                entity.Property(e => e.Name).HasMaxLength(20);
            });

            modelBuilder.Entity<Spot>(entity =>
            {
                entity.ToTable("Spot");

                entity.Property(e => e.Available).HasMaxLength(10);

                entity.Property(e => e.Preferential).HasMaxLength(3);

                entity.HasOne(d => d.Parking)
                    .WithMany(p => p.Spots)
                    .HasForeignKey(d => d.ParkingId)
                    .HasConstraintName("FK_Spot_Parking");

                entity.HasOne(d => d.Rate)
                    .WithMany(p => p.Spots)
                    .HasForeignKey(d => d.RateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Spot_Rate");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("User");

                entity.Property(e => e.Email).HasMaxLength(30);

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.Password).HasMaxLength(20);

                entity.HasOne(d => d.Rol)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.RolId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_User_Rol");
            });

            modelBuilder.Entity<Vehicle>(entity =>
            {
                entity.ToTable("Vehicle");

                entity.Property(e => e.Color).HasMaxLength(50);

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.Type).HasMaxLength(50);

                entity.HasOne(d => d.Client)
                    .WithMany(p => p.Vehicles)
                    .HasForeignKey(d => d.ClientId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Vehicle_User");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
