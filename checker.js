const ua = detect.parse(navigator.userAgent);
let x = ua.os.family;
console.log(ua.os.family);

if(ua.os.family !== null) {   
    console.log(x);
    console.log(ua.os.family);

    if(ua.os.family === 'Android'){
        console.log("anroidf")
        console.log("we are on android baby");
        const styleElement = document.getElementById("mainStyle")
        var stylePage = document.getElementById("mainStyle");
        var fileName = stylePage.getAttribute("href");
        var newFileName = "";
        newFileName = "mobile.css";

        stylePage.setAttribute("href", newFileName);
        styleElement.setAttribute("href",newFileName);
        localStorage.setItem("stylesheet",newFileName);
    }  

    if(ua.device.family === 'iPhone'){
        //TODO check 
        console.log("we are on iphone baby");
        const styleElement = document.getElementById("mainStyle")
        var stylePage = document.getElementById("mainStyle");
        var fileName = stylePage.getAttribute("href");
        var newFileName = "";
        newFileName = "mobile.css";

        stylePage.setAttribute("href", newFileName);
        styleElement.setAttribute("href",newFileName);
        localStorage.setItem("stylesheet",newFileName);
    }

    if(ua.device.family === 'Mac OS X'){
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

