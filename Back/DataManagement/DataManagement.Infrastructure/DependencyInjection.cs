using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace DataManagement.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfigurationManager configurationManager)
    {
        services.AddDbContext<ApplicationDbContext>(opt =>
            opt.UseNpgsql(configurationManager.GetValue<string>("PgSql:ConnectionString")));
        
        return services;
    }
}