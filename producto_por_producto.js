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

// En este ejemplo vamos agregando los elementos a medida que los vamos creando

// Busca una etiqueta en el document con class .container
const container = document.querySelector(".container");
// Crea un div y lo deja en memoria
const productCard = document.createElement("div");
// Agrega una clase
productCard.classList.add("product_card");
// Mete el div productCard en el div container (recien aca aparece en pantalla)
container.appendChild(productCard);

// Mismo proceso con el anchor
const productA = document.createElement("a");
// Agregamos el atributo nombre: href, valor: blablabla
productA.setAttribute("href", "blablabla");
// Agregamos productA a productCard (recien aca aparece en pantalla)
productCard.appendChild(productA);
