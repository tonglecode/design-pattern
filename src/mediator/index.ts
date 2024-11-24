import SmartHome from "./SmartHome";
import "./style.css";

document.body.innerHTML +=
  '<div class="home">\
<div class="door"></div>\
<div class="window"></div>\
<div class="heatboiler"></div>\
<div class="coolaircon"></div>\
</div>';

const smartHome = new SmartHome();

smartHome.controll();
