using System;
using System.Collections.Generic;
using System.Text;

namespace BIMManager.Models.Entities
{
    public class Complex : IBaseModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public ICollection<Entity> Entities { get; set; }
    }
}
