const FULLBOX = document.getElementById("fullBox");
const CIRCLESWITCH = document.getElementById("switch");
const ARC1 = document.getElementById("arc1");
const ARC2 = document.getElementById("arc2");
const ARC3 = document.getElementById("arc3");
const TITLE = document.getElementById("title");
const CLOUDSANDSTUFF = document.getElementById("cloudsAndStuff");
const SUN = document.getElementById("sun");
const MOON = document.getElementById("moon");
const CLOUDS = document.getElementsByClassName("cloudColor");

var isRight = false;

function switchThat(){
    if (isRight) {
        CIRCLESWITCH.style.transform = "translate(0px)";
        CIRCLESWITCH.style.backgroundColor = "orange";
        ARC1.style.transform = "translate(0px) rotateY(0deg)";
        ARC2.style.transform = "translate(0px) rotateY(0deg)";
        ARC3.style.transform = "translate(0px) rotateY(0deg)";
        ARC3.style.zIndex = "0";
        ARC1.style.backgroundColor = "#DFF6FF";
        ARC2.style.backgroundColor = "#47B5FF";
        ARC3.style.backgroundColor = "#1363DF";
        FULLBOX.style.backgroundColor = "#1363DF";
        document.body.style.backgroundColor = "#F1F6F9";
        TITLE.style.color = "black";
        CLOUDSANDSTUFF.style.transform = "translateX(0px)";
        SUN.style.transform = "translateY(0px)";
        MOON.style.transform = "translateY(-30px) translateX(0px)"

        for (let i=0; i<CLOUDS.length; i++){
            CLOUDS[i].style.backgroundColor = "#f4f4f4";
        }

        isRight = false;
    } else {
        CIRCLESWITCH.style.transform = "translatex(100px)";
        ARC1.style.transform = "translate(8px) rotateY(180deg)";
        ARC2.style.transform = "translate(-4px) rotateY(180deg)";
        ARC3.style.transform = "translate(-4px) rotateY(180deg)";
        ARC3.style.zIndex = "1";
        ARC1.style.backgroundColor = "#D8D9DA";
        ARC2.style.backgroundColor = "#272829";
        ARC3.style.backgroundColor = "#61677A"
        CIRCLESWITCH.style.backgroundColor = "#394867";
        FULLBOX.style.backgroundColor = "#272829";
        document.body.style.backgroundColor = "#000000";
        TITLE.style.color = "#D8D9DA";
        CLOUDSANDSTUFF.style.transform = "translateX(-55px)";
        SUN.style.transform = "translateY(30px)";
        MOON.style.transform = "translateY(0px) translateX(49px)";
        
        for (let i=0; i<CLOUDS.length; i++){
            CLOUDS[i].style.backgroundColor = "#9BA4B4";
        }

        isRight = true;
    }
}