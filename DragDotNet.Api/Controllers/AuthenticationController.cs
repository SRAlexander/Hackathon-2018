namespace DragDotNet.Api.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    [Produces("application/json")]
    [Route("api/authentication")]
    public class AuthenticationController : Controller
    {
        [HttpPost]
        [Route("log-in")]
        public IActionResult LogIn(string name)
        {
            CurrentUser.Username = name;

            return Ok(new {UserName = name, Success = true});
        }
    }
}