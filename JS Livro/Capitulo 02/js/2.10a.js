const frm = document.querySelector("form");
const resp1 = document.querySelector("#outresp1");
const resp2 = document.querySelector("#outresp2");

frm.addEventListener("submit", (e) => {
  const med = frm.inMed.value;
  const preco = Number(frm.inPreco.value);

  const valor = Math.floor(preco * 2);
  resp1.innerText = `Promoção de ${med}`;
  resp2.innerText = `Leve 2 por apenas R$: ${valor.toFixed(2)}`;
  e.preventDefault();
});
