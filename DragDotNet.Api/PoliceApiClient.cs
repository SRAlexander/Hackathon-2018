namespace DragDotNet.Api
{
    using System;
    using System.IO;
    using System.Net;
    using System.Threading.Tasks;
    using Controllers;
    using Newtonsoft.Json;

    public class PoliceApiClient
    {
        private const string BASE_URL = "http://codeitteam4.westeurope.cloudapp.azure.com/api";
        private const string PEOPLE_URL = BASE_URL + "/people";
        private const string CREDENTIALS = "Basic YWRtaW5AY2l2aWNhLmxvY2FsOnBhc3N3b3JkMTIz";

        public async Task<ScoundrelInfo[]> FindScoundrels(FindScoundrelModel findScoundrelModel)
        {
            var firstName = findScoundrelModel.FirstName;
            var lastName = findScoundrelModel.LastName;
            var gender = findScoundrelModel.Gender;
            var dob = findScoundrelModel.DateOfBirth;
            var postCode = findScoundrelModel.Postcode;

            var request =
                WebRequest.CreateHttp(
                    $"{PEOPLE_URL}?FirstName={firstName}&LastName={lastName}&gender={gender}&DateOfBirth={dob}&PostCode={postCode}");
            request.Method = "GET";
            request.Headers.Add(HttpRequestHeader.Authorization, CREDENTIALS);
            using (var response = request.GetResponse())
            {
                using (var responseStream = response.GetResponseStream())
                {
                    if (responseStream == null)
                        return await Task.FromResult(Array.Empty<ScoundrelInfo>());
                    using (var textReader = new StreamReader(responseStream))
                    {
                        var responseBody = await textReader.ReadToEndAsync();
                        var scoundrels = JsonConvert.DeserializeObject<ScoundrelInfo[]>(responseBody);
                        return scoundrels;
                    }
                }
            }
        }
    }
}