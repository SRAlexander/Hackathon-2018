using System.Linq;
using Microsoft.ProjectOxford.Face;

namespace DragDotNet.Api
{
    using System;
    using System.IO;
    using System.Net;
    using System.Threading.Tasks;
    using Controllers;
    using Newtonsoft.Json;

    public class ImageIdentifyApi
    {

        const string subscriptionKey = "7f91bde031eb43dd99befa9d28e8dea1";
        const string uriBase = "https://northeurope.api.cognitive.microsoft.com/face/v1.0";
        const string personGroupId = "criminal_take_6";

        public async Task<ScoundrelInfo[]> FindScoundrels(string base64ImageString)
        {
            var faceServiceClient = new FaceServiceClient(subscriptionKey, uriBase);
 
            byte[] data = System.Convert.FromBase64String(base64ImageString);
            MemoryStream testImageFile = new MemoryStream(data);


            var faces = await faceServiceClient.DetectAsync(testImageFile);
            var faceIds = faces.Select(face => face.FaceId).ToArray();

            var results = await faceServiceClient.IdentifyAsync(personGroupId, faceIds);
            foreach (var identifyResult in results)
            {
                Console.WriteLine("Result of face: {0}", identifyResult.FaceId);
                if (identifyResult.Candidates.Length == 0)
                {
                    Console.WriteLine("No one identified");
                    return null;
                }
                else
                {
                    // Get top 1 among all candidates returned
                    var candidateId = identifyResult.Candidates[0].PersonId;
                    var person = await faceServiceClient.GetPersonAsync(personGroupId, candidateId);
                    Console.WriteLine("Identified as {0}", person.Name);
                    return new ScoundrelInfo[]
                    {
                        new ScoundrelInfo()
                        {
                            IdentityUserData = person.UserData,
                            IdentifyGuid = person.PersonId.ToString()
                        }
                    };
                }
            }

            return null;

        }
    }
}