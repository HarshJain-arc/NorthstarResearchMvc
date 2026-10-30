using Microsoft.AspNetCore.Mvc;
namespace NorthstarResearchMvc.Controllers;
public class HomeController : Controller
{
    public IActionResult Index() => View();
    public IActionResult Error() => View();
}
