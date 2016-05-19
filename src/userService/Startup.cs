using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Shout.UserService
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
              var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath);
                
            Configuration = builder.Build();
        }
        
        public IConfigurationRoot Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();            
        }
    
    public void Configure(IApplicationBuilder app)
        {
             app.UseMvc(routes =>
             {
                 routes.MapRoute(
                     name: "default",
                     template: "{controller=Home}/{action=Index}/{id?}");
             });
            
        }
    }
}
