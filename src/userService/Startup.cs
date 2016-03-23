using Microsoft.AspNet.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNet.Cors;

namespace Shout.UserService
{
    public class Startup
    {
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            
            services.AddCors(options => options.AddPolicy("AllowAll", p => p.AllowAnyOrigin()
                                                                        .AllowAnyMethod()
                                                                         .AllowAnyHeader()));                                                                                                                                                  
            
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseCors("AllowAll");
            app.UseMvc();
            
            
        }
    }
}
