"use strict";var sideMenu=document.querySelector("aside"),menuBtn=document.querySelector("#menu-btn"),closeBtn=document.querySelector("#close-btn"),themeToggler=document.querySelector(".theme-toggler");menuBtn.addEventListener("click",function(){sideMenu.style.display="block"}),closeBtn.addEventListener("click",function(){sideMenu.style.display="none"}),themeToggler.addEventListener("click",function(){document.body.classList.toggle("dark-theme-variables"),themeToggler.querySelector("span:nth-child(1)").classList.toggle("active"),themeToggler.querySelector("span:nth-child(2)").classList.toggle("active")}),Orders.forEach(function(e){var t=document.createElement("tr"),e="\n        <td>".concat(e.productName,"</td>\n        <td>").concat(e.productNumber,"</td>\n        <td>").concat(e.paymentStatus,'</td>\n        <td class="').concat("Отклонено"===e.shipping?"danger":"В ожидании"===e.shipping?"warning":"primary",'">').concat(e.shipping,"</td>\n    ");t.innerHTML=e,document.querySelector("table tbody").appendChild(t)});
//# sourceMappingURL=main.js.map
