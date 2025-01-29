using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAutoParts.Data;

namespace WebAutoParts.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController(AutoPartsDbContext context) : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetList()
        {
            var users = await context.Users.Select(x => new
            {
                Id = x.Id,
                Name = $"{x.LastName} {x.FirstName}",
                Email = x.Email
            }).ToListAsync();
            return Ok(users);
        }
    }
}
