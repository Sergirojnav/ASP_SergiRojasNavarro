using P1_ASP.Models;

namespace P1_ASP.Services
{
    public class RepositoryIfCertificates
    {
        public List<ClassCertificates> GetCertificates()
        {
            return new List<ClassCertificates>() {

                    new ClassCertificates {
                    Title = "Administración de Sistemas Operativos Linux",
                    Description = "Sergi Rojas Navarro",
                    Link = "/projects/LINUX-DAW.pdf",
                    ImageURL = "/Images/ct1.png"
                    },

                    new ClassCertificates {
                    Title = "Jave SE Fundamentals",
                    Description = "Sergi Rojas Navarro",
                    Link = "/projects/Oracle-DAW.pdf",
                    ImageURL = "/Images/ct2.png"
                    },

                    new ClassCertificates {
                    Title = "Conceptos Fundamentales SQL Oracle 11g",
                    Description = "Sergi Rojas Navarro",
                    Link = "/projects/Oracle-DAW1.pdf",
                    ImageURL = "/Images/ct3.png"
                    },

                    new ClassCertificates {
                    Title = "Programación PL/SQL Oracle 11g",
                    Description = "Sergi Rojas Navarro",
                    Link = "/projects/Oracle-DAW2.pdf",
                    ImageURL = "/Images/ct4.png"
                    },

                    new ClassCertificates {
                    Title = "Administración de Windows 10",
                    Description = "Sergi Rojas Navarro",
                    Link = "/projects/Windows-2-DAW.pdf",
                    ImageURL = "/Images/ct5.png"
                    },

                    new ClassCertificates {
                    Title = "Administración de Infraestructuras de Red con Windows Servrt 2016",
                    Description = "Sergi Rojas Navarro",
                    Link = "/projects/Windows-DAW.pdf",
                    ImageURL = "/Images/ct6.png"
                    }

            };
        }
    }
}