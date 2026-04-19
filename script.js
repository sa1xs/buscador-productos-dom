const buscador = document.getElementById("buscador");
const resultado = document.getElementById("resultado");
const productos = document.querySelectorAll(".producto");

buscador.addEventListener("keyup", ()=>{

    const texto = buscador.value.toLowerCase().trim()
    let contador = 0;

    productos.forEach(producto => {

        const nombre = producto.textContent.toLowerCase()

        if(nombre.startsWith(texto)){
            producto.style.display = "list-item";
            contador++;
        }else{
            producto.style.display = "none";
        }

        resultado.textContent = "Resultados: " + contador;
        
    });

})
