using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ParkingProjectAPI.Models;

namespace ParkingProjectAPI.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("GetAllPolicy")]
    [ApiController]
    public class SpotsController : ControllerBase
    {
        private readonly IF4101_B91472_B92299Context _context;

        public SpotsController()
        {
            _context = new IF4101_B91472_B92299Context();
        }

        // GET: api/Spots
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Spot>>> GetSpots()
        {
            return await _context.Spots.Include(s => s.Parking).Include(s => s.Parking).Include(s => s.Rate).Select(spotItem => new Spot()
            {
                Id = spotItem.Id,
                Parking = spotItem.Parking,
                Number = spotItem.Number,
                Preferential = spotItem.Preferential,
                Rate = spotItem.Rate,
                Available = spotItem.Available

            }).ToListAsync();
        }

        // GET: api/Spots/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Spot>> GetSpot(int id)
        {
          if (_context.Spots == null)
          {
              return NotFound();
          }
            var spot = await _context.Spots.FindAsync(id);

            if (spot == null)
            {
                return NotFound();                
            }

            return spot;
        }

        // PUT: api/Spots/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSpot(int id, Spot spot)
        {
            if (id != spot.Id)
            {
                return BadRequest();
            }

            _context.Entry(spot).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SpotExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Spots
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Spot>> PostSpot(Spot spot)
        {
          if (_context.Spots == null)
          {
              return Problem("Entity set 'IF4101_B91472_B92299Context.Spots'  is null.");
          }
            _context.Spots.Add(spot);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSpot", new { id = spot.Id }, spot);
        }

        // DELETE: api/Spots/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSpot(int id)
        {
            if (_context.Spots == null)
            {
                return NotFound();
            }
            var spot = await _context.Spots.FindAsync(id);
            if (spot == null)
            {
                return NotFound();
            }

            _context.Spots.Remove(spot);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SpotExists(int id)
        {
            return (_context.Spots?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
