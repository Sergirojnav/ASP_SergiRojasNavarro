
using P1_ASP.Models;

namespace P1_ASP.Services
{
    public class RepositoryIfProjects
    {
        public List<ClassProject> GetProjects()
        {
            return new List<ClassProject>() {

                    new ClassProject {
                    Title = "ComicCorp web page",
                    Description = "RojasCorp Industries",
                    Link = "/projects/Practica7.comic/index.html",
                    ImageURL = "/Images/web1.png"
                    },

                    new ClassProject {
                    Title = "Drag&Drop interactive history",
                    Description = "RojasCorp Industries",
                    Link = "/projects/PRACTICA05_DragDrop/index2.html",
                    ImageURL = "/Images/web2.png"
                    },

                    new ClassProject {
                    Title = "Trivia Contest 'JavaScript'",
                    Description = "RojasCorp Industries",
                    Link = "/projects/PRACTICA02/index.html",
                    ImageURL = "/Images/web3.png"
                    },

                    new ClassProject {
                    Title = "Easy functions 'JavaScript'",
                    Description = "RojasCorp Industries",
                    Link = "/projects/PRACTICA01/index.html",
                    ImageURL = "/Images/web4.png"
                    },

                    new ClassProject {
                    Title = "Marvel web page",
                    Description = "RojasCorp Industries",
                    Link = "/projects/PRACTICA7.DiseñoWeb/INDEX.html",
                    ImageURL = "/Images/web5.png"
                    },

                    new ClassProject {
                    Title = "Game Space Invaders 'JavaScript&Canvas'",
                    Description = "RojasCorp Industries",
                    Link = "/projects/space-invaders-main/index.html",
                    ImageURL = "/Images/web6.png"
                    }

            };
        }
    }
}
