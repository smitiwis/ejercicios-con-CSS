document.addEventListener("DOMContentLoaded", function () {

    let numpage = parseInt(localStorage.getItem("cargarPage"));
    numpage = numpage + 1 ;
    localStorage.setItem("cargarPage", numpage);
    let div__page = document.getElementById("pagina");
    let newRefresh = localStorage.getItem("cargarPage");
    div__page.innerHTML = newRefresh;


})


