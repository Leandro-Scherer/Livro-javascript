const frm = document.querySelector("form");
const resp1 = document.querySelector("#outresp1");
const resp2 = document.querySelector("#outresp2");

frm.addEventListener("submit", (e) => {
  const produto = frm.inProduto.value;
  const preco = Number(frm.inPreco.value);

  const total = (preco * 2) + 3;

  resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2)}`;
  resp2.innerText = `o 3º produto custa apenas R$: 3.00`;
  e.preventDefault()
});
