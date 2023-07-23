function toggleStyleSheet(){

    const styleElement = document.getElementById("mainStyle")
    var stylePage = document.getElementById("mainStyle");
    var fileName = stylePage.getAttribute("href");
    var newFileName = "";
    if(fileName == "css_files/style.css") newFileName = "css_files/style2.css";
    else newFileName = "css_files/style.css";
    stylePage.setAttribute("href", newFileName);
    styleElement.setAttribute("href",newFileName);
    localStorage.setItem("stylesheet",newFileName);

}

window.onload = function()
    {
        var styleSheetName = localStorage.getItem("stylesheet") || "css_files/style.css";
        var htmlStyleElement = document.getElementById("mainStyle");
        htmlStyleElement.setAttribute("href",styleSheetName);
    }