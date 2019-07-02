/*Abrir Disqus en un boton*/
function ventanaNueva(documento){
    window.open(documento,'nuevaVentana','width=915, height=590');
}

/* Imagen pequeña y al darle click se ponga grande*/
window.addEventListener("load", function(event) {
    var elements = document.getElementsByTagName("img");
    var arr = [].slice.call(elements);
    for(var i = 0; i < arr.length; i++){
	arr[i].addEventListener('click',gallery.bind(this),false);
    }
});

function gallery(e){
    if (e.target.className == "small")
	e.target.className = "normal";
    else
	e.target.className =  "small";
}
