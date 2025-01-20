using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using WebAutoParts.Contants;
using WebAutoParts.Data.Entities.Identity;

namespace WebAutoParts.Data
{
    public static class SeederDB
    {
        public static async void SeedData(this IApplicationBuilder app)
        {
            using (var scope = app.ApplicationServices
                .GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var context = scope.ServiceProvider.GetRequiredService<AutoPartsDbContext>();
                var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<RoleEntity>>();
                var userManager = scope.ServiceProvider.GetRequiredService<UserManager<UserEntity>>();

                //context.Database.Migrate();

                // Roles seed
                if (!await context.Roles.AnyAsync())
                {
                    foreach (var roleName in Roles.All)
                    {
                        await roleManager.CreateAsync(new RoleEntity
                        {
                            Name = roleName
                        });
                    }
                }

                // Users seed
                if (!await context.Users.AnyAsync())
                {
                    var user = new UserEntity
                    {
                        FirstName = "Микола",
                        LastName = "Адмін",
                        Email = "admin@gmail.com",
                        UserName = "admin@gmail.com"
                    };

                    IdentityResult result = await userManager.CreateAsync(
                        user,
                        "123456"
                    );

                    if (!result.Succeeded)
                        throw new Exception("Error creating admin account");

                    result = await userManager.AddToRoleAsync(user, Roles.Admin);

                    if (!result.Succeeded)
                        throw new Exception("Role assignment error");
                }
            }
        }
    }
}
