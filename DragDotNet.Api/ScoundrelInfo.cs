namespace DragDotNet.Api
{
    public class ScoundrelInfo
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string DateOfBirth { get; set; }
        public string IdentifyGuid { get; set; }
        public string IdentityUserData { get; set; }
        public PhotoInfo Photo { get; set; }
    }

    public class PhotoInfo
    {
        public string Content { get; set; }
        public string MimeType { get; set; }
        public string Id { get; set; }
    }

    public class ScoundrelDetailedInfo : ScoundrelInfo
    {
        public IncidentInfo[] Incidents { get; set; }
    }

    public class IncidentInfo
    {
        public string Id { get; set; }
        public string IncidentDate { get; set; }
        public string IncidentStatus { get; set; }
        public string IncidentType { get; set; }
        public string LocationId { get; set; }
        public string ReportDate { get; set; }
        public string ReportDescription { get; set; }
        public string ReportedBy { get; set; }
        public string ReportTitle { get; set; }
    }
}