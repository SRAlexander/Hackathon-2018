using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DragDotNet.Api.Tests
{
    using Controllers;
    using Xunit;

    public class PoliceClientApiTests
    {
        private static readonly PoliceApiClient CLIENT = new PoliceApiClient();

        [Fact]
        public async Task SearchScoundrels()
        {
            var lastName = "Powell";
            var findScoundrel = new FindScoundrelModel {LastName = lastName};
            var scoundrels = await CLIENT.FindScoundrels(findScoundrel);
            Assert.Collection(scoundrels, s => Assert.Equal(lastName, s.LastName));

        }
    }
}
