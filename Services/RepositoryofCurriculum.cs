using Microsoft.AspNetCore.Http;
using P1_ASP.Models;

namespace P1_ASP.Services
{
    public class RepositoryofCurriculum
    {
        public List<ClassCurriculum> GetCurriculum()
        {
            return new List<ClassCurriculum>() {

                    new ClassCurriculum {
                    Title = "CV-Sergi Rojas Navarro",
                    Description = "Sergi Rojas Navarro",
                    Link = "/projects/CV-SergiRojasNavarro (1).pdf",
                    ImageURL = "/Images/cv.png"
                    },

            };
        }
    }
}