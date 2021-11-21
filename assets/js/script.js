//Desarrollo en clases, orden, comentado y eliminado src en el HTML
//Implementar el Patrón Módulo mediante IIFE
const IIFE = (() => {

    function mostrarTodo (url, id) {
            id.setAttribute("src", url);
    }
    return {mostrarTodo}
})();

//Establecer una clase padre denominada Multimedia
class Multimedia {
    #url
    constructor (url) {
        this.#url = url;
    }
    get url() {
        return this.#url;
    }
    setInicio() {
        return `Este metodo es para realizar un cambio en la URL`
    }
};

//Crear una clase “Reproductor”, siendo hija de la clase padre Multimedia
class Reproductor extends Multimedia {
    #id
    constructor (url, id) {
        super(url);
        this.#id = id;
    }
    get id () {
        return this.#id;
    }
    playMultimedia() {
        IIFE.mostrarTodo(this.url, this.id);
    }
    setInicio(tiempo) {
        this.id.setAttribute("src",`${this.url}?start=${tiempo}`);
    }
};

//Instanciar la clase hija + iframe
const musica = document.querySelector("#musica");
const pelicula = document.querySelector("#pelicula");
const serie = document.querySelector("#serie");

//Invocar al método “playMultimedia” + Utiliza el método “setInicio”
const m1 = new Reproductor("https://www.youtube.com/embed/YODCM26JXOY", musica);
m1.playMultimedia();
m1.setInicio(60);
const s1 = new Reproductor("https://www.youtube.com/embed/HhesaQXLuRY", serie);
s1.playMultimedia();
const p1 = new Reproductor("https://www.youtube.com/embed/jEFTyAXOJ58", pelicula);
p1.playMultimedia();


