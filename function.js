console.clear();
 
const nav = document.querySelector("nav");
const navLinksContainer = document.querySelector(".nav-items");
const navLinks = [...document.querySelectorAll(".link")];
const menuBtn = document.querySelector(".menu-btn");
const subMenuBtn = document.querySelector(".back-button");
 
function createHoverEl() {
 let hoverEl = document.createElement("div");
 hoverEl.className = "hover-el";
 hoverEl.style.setProperty("--y", "0px");
 hoverEl.style.setProperty("--mousex", "0px");
 hoverEl.style.setProperty("--mousey", "0px");
 navLinksContainer.appendChild(hoverEl);
}
createHoverEl();
 
navLinks.forEach((link, index) => {
 let hoverEl = navLinksContainer.querySelector(".hover-el");
 link.style.setProperty("--delay", `${index * 50}ms`);
 link.addEventListener("mousemove", function(e) {
 hoverEl.style.setProperty("--y", `${index * 60}px`);
 hoverEl.style.setProperty("opacity", "1");
 hoverEl.style.setProperty("--mousex", `${e.pageX - hoverEl.offsetLeft}px`);
 hoverEl.style.setProperty("--mousey", `${e.pageY - hoverEl.offsetTop}px`);
 });
 navLinksContainer.addEventListener("mouseout", function() {
 hoverEl.style.setProperty("opacity", "0");
 });
 link.addEventListener("click", function() {
 let hoverEl = navLinksContainer.querySelector(".hover-el");
 hoverEl.style.opacity = '0';
 toggleSubmenu(link);
 });
});
 
menuBtn.addEventListener("click", function() {
 nav.classList.toggle("nav-open");
 menuBtn.classList.toggle("close");
});
subMenuBtn.addEventListener("click", function() {
 nav.classList.toggle("sub-menu-open");
 removeSubmenu();
});
 
function toggleSubmenu(el) {
 let subMenu = nav.querySelector(".sub-menu");
 if (el.children[1]) {
 createSubmenu(el);
 } else if (nav.contains(subMenu)) {
 removeSubmenu();
 } else {
 return;
 }
}
 
function createSubmenu(el) {
 let subMenuContainer = document.createElement("div");
 subMenuContainer.className = "sub-menu";
 let subMenuItem = el.children[1].cloneNode(true);
 let subMenuItemList = [...subMenuItem.children];
 subMenuItemList.forEach((item, index) => {
 item.classList.add("off-menu");
 item.style.setProperty("--delay", `${index * 40}ms`);
 });
 nav.classList.toggle("sub-menu-open");
 nav.appendChild(subMenuContainer);
 subMenuContainer.appendChild(subMenuItem);
 setTimeout(function() {
 subMenuItemList.forEach(item => {
 item.classList.remove("off-menu");
 item.classList.add("on-menu");
 });
 }, 200);
}
function removeSubmenu() {
 let subMenu = nav.querySelector(".sub-menu");
 let subMenuItemList = [...subMenu.children[0].children];
 if (nav.contains(subMenu)) {
 subMenuItemList.forEach(item => {
 item.classList.add("off-menu");
 item.classList.remove("on-menu");
 });
 setTimeout(function() {
 nav.removeChild(subMenu);
 }, 500);
 }
}


!function(){
    function t(t,e){for(;(t=t.parentElement)&&!t.classList.contains(e););
        return t
    }
    function e(t){
        return t=t.replace(/[^\d\.-]/g,""),Number(t)}function n(t){
            var e=document.createElement("span");
            return e.innerHTML=t,e.textContent||e.innerText
        }
        function r(t,e,n){
            for(var r=0;r<n.length;r++)
            r==e?n[e].setAttribute("data-sort-direction",t):n[r].setAttribute("data-sort-direction",0)}
            function a(t,e){
                for(var n=t.getElementsByTagName("tbody")[0].getElementsByTagName("tr"),r=0;r<n.length;r++)
                for(var a=n[r].getElementsByTagName("td"),i=0;i<a.length;i++)a[i].innerHTML=e[r][i]}window.addEventListener("load",function(){
                    for(var i=document.getElementsByClassName("sortable-table"),o=[],s=0;s<i.length;s++)!function(){i[s].setAttribute("data-sort-index",s);
                for(var d=i[s].getElementsByTagName("tbody")[0].getElementsByTagName("tr"),l=0;l<d.length;l++)
                for(var g=d[l].getElementsByTagName("td"),c=0;c<g.length;c++)
                void 0===o[s]&&o.splice(s,0,[]),
                void 0===o[s][l]&&o[s].splice(l,0,[]),o[s][l].splice(c,0,g[c].innerHTML);
                for(var u=i[s].getElementsByTagName("thead")[0].getElementsByTagName("tr")[0].getElementsByTagName("th"),m=0;m<u.length;m++)!function(){
                    var s=u[m].classList.contains("numeric-sort");u[m].setAttribute("data-sort-direction",0),u[m].setAttribute("data-sort-index",m),u[m].addEventListener(
                    "click",function(){
                    var d=this.getAttribute("data-sort-direction"),
                l=this.getAttribute("data-sort-index"),
                g=t(this,"sortable-table").getAttribute("data-sort-index");
                r(1==d?-1:1,l,u),o[g]=o[g].sort(function(t,r)
                {
                    var a=n(t[l]),i=n(r[l]);
                    return s&&(a=e(a),i=e(i)),
                    a===i?0:1==d?a>i?-1:1:a<i?-1:1}),
                a(i[g],o[g])
            })}()}
                ()}
                )}
                ();