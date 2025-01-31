using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Interfaces;
using Core.MapperProfile;
using Core.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Core
{
    public static class ServiceExtensions
    {
        public static void AddMapper(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(AppProfile));
        }
        public static void AddServices(this IServiceCollection services)
        {
            services.AddScoped<IPartsService,SparePartService>();
        }

    }
}
