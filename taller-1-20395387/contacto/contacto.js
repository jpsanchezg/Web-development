
function hizoClick() {
    //mostrar el formulario de contacto 
    var name = document.getElementById("name").value;

    var correo = document.getElementById("uemail").value;
    re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;
    if (!re.exec(correo)) {
        alert("La dirección de email es incorrecta.");

    } else {
        alert('Ingreso el nombre:' + name + ' el correo:' + correo + ' asunto:' + asunto + ' y el mensaje:' + mensaje);
    }


    console.log(asunto)
}




window.onscroll = function () {
    scrollFunction();
    scrollFunctionBTT(); // back to top button
};

function scrollFunction() {
    let intViewportWidth = window.innerWidth;
    if (
        document.body.scrollTop > 30 ||
        (document.documentElement.scrollTop > 30) & (intViewportWidth > 991)
    ) {
        document.getElementById("navbar").classList.add("top-nav-collapse");
    } else if (
        document.body.scrollTop < 30 ||
        (document.documentElement.scrollTop < 30) & (intViewportWidth > 991)
    ) {
        document.getElementById("navbar").classList.remove("top-nav-collapse");
    }
}


AOS.init({
    duration: 1000,
    easing: "ease",
    once: true,
});



