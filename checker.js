const ua = detect.parse(navigator.userAgent);

if(ua.os.family !== null) {   

    if(ua.os.family === 'iPhone'){
        //TODO check 
        console.log("we are on iphone baby");
        const styleElement = document.getElementById("mainStyle")
        var stylePage = document.getElementById("mainStyle");
        var fileName = stylePage.getAttribute("href");
        var newFileName = "";
        newFileName = "css_files/dummy.css";

        stylePage.setAttribute("href", newFileName);
        styleElement.setAttribute("href",newFileName);
        localStorage.setItem("stylesheet",newFileName);
    }
    if(ua.os.family === 'Android'){
        //TODO check 
    }  
    if(ua.os.family === 'Mac OS X'){
        //TODO check 
        console.log("we are on mac baby");
        const styleElement = document.getElementById("mainStyle")
        var stylePage = document.getElementById("mainStyle");
        var fileName = stylePage.getAttribute("href");
        var newFileName = "";
        newFileName = "css_files/stylecopy.css";

        stylePage.setAttribute("href", newFileName);
        styleElement.setAttribute("href",newFileName);
        localStorage.setItem("stylesheet",newFileName);
    }  
       
}

