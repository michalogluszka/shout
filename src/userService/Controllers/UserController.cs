using System.Collections.Generic;
using Microsoft.AspNet.Mvc;


namespace Shout.UserService.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        // GET: api/user
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
    }
}
