function toggleStyleSheet(){

    onclick="location.href='blog.html';"

}

window.onload = function()
    {
        var styleSheetName = localStorage.getItem("stylesheet") || "css_files/stylecopy.css";
        var htmlStyleElement = document.getElementById("mainStyle");
        htmlStyleElement.setAttribute("href",styleSheetName);
    }