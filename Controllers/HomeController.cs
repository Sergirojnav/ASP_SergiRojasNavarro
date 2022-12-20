using Microsoft.AspNetCore.Mvc;
using P1_ASP.Context;
using P1_ASP.Models;
using P1_ASP.Services;
using System.Diagnostics;

namespace P1_ASP.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private readonly ContextDB contextDB;
        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            ViewBag.Vname = "Sergi Rojas Navarro";
            ViewBag.V2 = "Programador de ASPx.net";
            return View();
        }

        public IActionResult Projects()
        {
            //ViewBag.Vproject = new RepositoryIfProjects().GetProjects();
            ViewBag.Vname = contextDB.ClassProject.ToList();

            return View();
        }

        public IActionResult Certificates()
        {
            ViewBag.Vcertificates = new RepositoryIfCertificates().GetCertificates();


            return View();
        }
        public IActionResult Curriculum()
        {
            ViewBag.Vcv = new RepositoryofCurriculum().GetCurriculum();


            return View();
        }
        public IActionResult Privacy()
        {
            return View();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}