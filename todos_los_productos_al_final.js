// ^^^^^^^ HTML ^^^^^^^^ //

`
<div class="container">
  /*
  <div class="product_card">
    <a href="blablabla">
      <img src="zaraza" />
      <div class="product_info">
        ...
      </div>
    </a>
  </div>
  */
</div>
`;

// ^^^^^^^ JS ^^^^^^^^ //

// Busca una etiqueta en el document con class .container
const container = document.querySelector(".container");

// Crea un div y lo deja en memoria
const productCard = document.createElement("div");
// Agrega una clase
productCard.classList.add("product_card");

// Mismo proceso con el anchor
const productA = document.createElement("a");
// Agregamos el atributo nombre: href, valor: blablabla
productA.setAttribute("href", "blablabla");

// Mismo proceso con el img
const productImg = document.createElement("img");
// Agregamos el atributo src, valor saraza
productImg.setAttribute("src", "saraza");

// Agregamos productA a productCard (todavia no aparece en pantalla)
productCard.appendChild(productA);
// Mete el div productCard en el div container (recien aca aparece en pantalla)
container.appendChild(productCard);
