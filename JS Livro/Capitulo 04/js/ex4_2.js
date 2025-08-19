const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// "ouvinte" de evento,acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
  frm.addEventListener("reset", () => {
    resp.innerText = ""; //limpa o conteúdo do elemento h3 que exibe a resposta
  });
  e.preventDefault(); //evita envio do form

  const nome = frm.inNome.value; //obtem valores do form
  const masculino = frm.inMasculino.value;
  const altura = Number(frm.inAltura.value);

  let peso; //declara a variavel peso
  if (masculino) {
    //se masculino (ou, if masculino == true)
    peso = 22 * Math.pow(altura, 2); // Math.pow eleva ao quadrado)
  } else {
    peso = 21 * Math.pow(altura, 2);
  }
  //apresenta a resposta (altera o conteúdo do elemento h3 da página)
  resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`;
});
