namespace DragDotNet.Api.Controllers
{
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Cors;
    using Microsoft.AspNetCore.Mvc;


    [Route("api/[controller]")]
    public class ScoundrelsController : Controller
    {
        private readonly PoliceApiClient _policeApiClient = new PoliceApiClient();

        [Route("find-scoundrels")]
        public async Task<IActionResult> FindScoundrels(FindScoundrelModel findScoundrelModel)
        {
            if (CurrentUser.Username == null)
            {
                return Unauthorized();
            }

            var scoundrels = await _policeApiClient.FindScoundrels(findScoundrelModel);

            return Ok(new { CurrentUser.Username, Scoundrels = scoundrels});
        }
    }
}