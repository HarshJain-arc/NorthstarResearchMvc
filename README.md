# Northstar Research — ASP.NET Core MVC (.NET 8)

A responsive, single-page financial research landing page built with ASP.NET Core MVC, Razor, CSS, and vanilla JavaScript. No database is required.

## Requirements
- .NET 8 SDK
- Visual Studio 2022 with the ASP.NET and web development workload, or VS Code

## Run locally
1. Extract the ZIP.
2. Open `NorthstarResearchMvc.csproj` in Visual Studio, or open a terminal in this folder.
3. Run:
   ```bash
   dotnet restore
   dotnet run
   ```
4. Open the local URL printed in the terminal.

## Publish
```bash
dotnet publish -c Release -o ./publish
```
This outputs a deployable ASP.NET Core application. **ASP.NET Core MVC is not a static-only hosting format**: it normally needs an ASP.NET Core-compatible host/runtime. If you need GitHub Pages or another static-only host, the Razor page must be exported/rebuilt as plain HTML/CSS/JS.

## Before launch
- Replace the sample Northstar branding and copy in `Views/Home/Index.cshtml`.
- Replace `hello@northstar.example`, `+91 00000 00000`, and `Your city, India`.
- The contact form is front-end only: it validates and shows a demo confirmation but does not send or store data. Connect an email/form service or implement a server endpoint.
- The chart is illustrative, not live market data.
- Update legal disclosures and have financial-service claims reviewed for your actual business and applicable regulations, including SEBI requirements where relevant.
- Google Fonts are loaded from a CDN. Remove the font links or self-host fonts if you need the site to work fully offline.

## Structure
```text
NorthstarResearchMvc/
├── Controllers/HomeController.cs
├── Views/Home/Index.cshtml
├── Views/Home/Error.cshtml
├── Views/Shared/_Layout.cshtml
├── Views/_ViewImports.cshtml
├── Views/_ViewStart.cshtml
├── wwwroot/css/site.css
├── wwwroot/js/site.js
├── Program.cs
└── NorthstarResearchMvc.csproj
```
