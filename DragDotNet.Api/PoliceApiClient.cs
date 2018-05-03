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
        private const string INCIDENTS_URL = BASE_URL + "/incidents";
        private const string CREDENTIALS = "Basic YWRtaW5AY2l2aWNhLmxvY2FsOnBhc3N3b3JkMTIz";

        public async Task<IncidentInfo[]> GetRelatedPersonIncidents(string personId)
        {
            var request =
                WebRequest.CreateHttp(
                    $"{INCIDENTS_URL}?IncidentPersons={personId}");
            request.Method = "GET";
            request.Headers.Add(HttpRequestHeader.Authorization, CREDENTIALS);
            using (var response = request.GetResponse())
            {
                using (var responseStream = response.GetResponseStream())
                {
                    if (responseStream == null)
                        return await Task.FromResult(Array.Empty<IncidentInfo>());
                    using (var textReader = new StreamReader(responseStream))
                    {
                        var responseBody = await textReader.ReadToEndAsync();
                        var incidentInfos = JsonConvert.DeserializeObject<IncidentInfo[]>(responseBody);
                        return incidentInfos;
                    }
                }
            }

        }

        public async Task<ScoundrelInfo> GetScoundrel(string personId)
        {
            var request =
                WebRequest.CreateHttp(
                    $"{PEOPLE_URL}/{personId}");
            request.Method = "GET";
            request.Headers.Add(HttpRequestHeader.Authorization, CREDENTIALS);
            using (var response = request.GetResponse())
            {
                using (var responseStream = response.GetResponseStream())
                {
                    if (responseStream == null)
                        return await Task.FromResult(default(ScoundrelInfo));
                    using (var textReader = new StreamReader(responseStream))
                    {
                        var responseBody = await textReader.ReadToEndAsync();
                        var scoundrelInfo = JsonConvert.DeserializeObject<ScoundrelInfo>(responseBody);
                        return scoundrelInfo;
                    }
                }
            }
        }

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