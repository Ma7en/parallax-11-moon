

/* start section img */

let stars = document.getElementById("stars"),
    moon = document.getElementById("moon"),
    mountains3 = document.getElementById("mountains3"),
    mountains4 = document.getElementById("mountains4"),
    river = document.getElementById("river"),
    boat = document.getElementById("boat"),
    ma7en = document.querySelector(".ma7en");


window.onscroll = function () {

    let value = scrollY;

    stars.style.left = value + "px";
    moon.style.top = value * 4 + "px";
    mountains3.style.top = value * 2 + "px";
    mountains4.style.top = value * 1.5 + "px";
    river.style.top = value + "px";
    boat.style.top = value + "px";
    boat.style.left = value * 3 + "px";

    ma7en.style.fontSize = value + "px";

    if (scrollY >= 67) {
        
        ma7en.style.fontSize = 67 + "px";
        ma7en.style.position = "fixed";
        
        if (scrollY >= 478) {
            
            ma7en.style.display = "none";
        } else {
            
            ma7en.style.display = "block";
        }

        if (scrollY >= 127) {
            document.querySelector(".main").style.background = 
                    "linear-gradient(#376281, #10001f)";
        } else {
            document.querySelector(".main").style.background = 
                    "linear-gradient(#200016, #10001f)";
        }

    }
}




