using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace WebAutoParts.Data.Entities.Identity;

public class UserEntity : IdentityUser<int>
{
    [StringLength(50)]
    public string? FirstName { get; set; }
    [StringLength(50)]
    public string? LastName { get; set; }
    [StringLength(50)]
    public string? Image { get; set; }

    public virtual ICollection<UserRoleEntity> UserRoles { get; set; } = null!;
}
