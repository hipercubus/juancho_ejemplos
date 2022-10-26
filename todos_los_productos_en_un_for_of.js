// ^^^^^^^ HTML ^^^^^^^^ //

`
<div class="container">
  /*
  <div class="product_card">
    <a href="blablabla">
      <img src="zaraza" />
      <div class="product_info">
        aca va el titulo
      </div>
    </a>
  </div>
  */
</div>
`;

// creamos una lista
const lista = [];
// agregamos tres elementos con un valor imgSrc
lista.push({
  titulo: "Titulo del producto 1",
  aHref: "url_del_producto_1",
  imgSrc: "http://www.loquesea.com/imagen_1",
});
lista.push({
  titulo: "Titulo del producto 2",
  aHref: "url_del_producto_2",
  imgSrc: "http://www.loquesea.com/imagen_2",
});
lista.push({
  titulo: "Titulo del producto 3",
  aHref: "url_del_producto_3",
  imgSrc: "http://www.loquesea.com/imagen_3",
});

// ^^^^^^^ JS ^^^^^^^^ //

// Busca una etiqueta en el document con class .container
const container = document.querySelector(".container");

// todo lo siguiente se tiene que ejecutar par cada elemento de la lista
// el primer valor del for of es representativo de cada elemento dentro del bloque for of
// entonces puede ser cualquier nombre
// el segundo elemento tiene que ser un array existente, no puede ser cualquier nombre
for (elemento of lista) {
  // Crea un div y lo deja en memoria
  const productCard = document.createElement("div");
  // Agrega una clase
  productCard.classList.add("product_card");

  // Mismo proceso con el anchor
  const productA = document.createElement("a");
  // Agregamos el atributo nombre: href, valor: blablabla
  productA.setAttribute("href", elemento.aHref);

  // Mismo proceso con el img
  const productImg = document.createElement("img");
  // Agregamos el atributo src, el valor lo obtengo del elemento
  productImg.setAttribute("src", elemento.imgSrc);

  // Creaemos product info en memorea
  const productInfo = document.createElement("div");
  // Le agregamos el texto desde el titulo del elemento
  productInfo.innerText = elemento.titulo;
  // Metemos el productInfo dentro de productA
  productA.appendChild(productInfo);

  // Agregamos productA a productCard (todavia no aparece en pantalla)
  productCard.appendChild(productA);
  // Mete el div productCard en el div container (recien aca aparece en pantalla)
  container.appendChild(productCard);
}
