namespace DragDotNet.Api.Controllers
{
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Cors;
    using Microsoft.AspNetCore.Mvc;


    [Route("api/[controller]")]
    public class ScoundrelsController : Controller
    {
        private readonly PoliceApiClient _policeApiClient = new PoliceApiClient();
        private readonly ImageIdentifyApi _imageIdentificationClient = new ImageIdentifyApi();

        [HttpGet]
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
        
        [HttpPost]
        [Route("find-scoundrels-by-image")]
        public async Task<IActionResult> FindScoundrelsByImage([FromBody] ImagePostModel imageDetails)
        {
            if (CurrentUser.Username == null)
            {
                return Unauthorized();
            }

            var scoundrels = await _imageIdentificationClient.FindScoundrels(imageDetails.base64String);
            return Ok(scoundrels);
        }
    }
}