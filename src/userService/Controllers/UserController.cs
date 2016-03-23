using System.Collections.Generic;
using Microsoft.AspNet.Mvc;


namespace Shout.UserService.Controllers
{
    class User
    {
        public string UserName { get; set;}
    }
    
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        // GET: api/user
        [HttpGet]
        public JsonResult Get()
        {            
            var user = new User() { UserName = "michalogluszka" };
            return Json(user);            
        }
    }
}
