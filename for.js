console.log("%c--- ATIVIDADE 1: Números de 1 a 10 (for) ---", "color: #38bdf8; font-weight: bold; font-size: 12px;");
let out1 = "";
for (let i = 1; i <= 10; i++) {
  console.log(i);
  out1 += i + " ";
}
document.getElementById("res-1").innerText = out1;

console.log("%c--- ATIVIDADE 2: Tabuada (for) ---", "color: #38bdf8; font-weight: bold; font-size: 12px;");
const numeroTabuada = 7;
let out2 = "";
for (let i = 1; i <= 10; i++) {
  const res = `${numeroTabuada} x ${i} = ${numeroTabuada * i}`;
  console.log(res);
  out2 += res + "\n";
}
document.getElementById("res-2").innerText = out2;

console.log("%c--- ATIVIDADE 3: Acumulador de 1 a 100 (while) ---", "color: #38bdf8; font-weight: bold; font-size: 12px;");
let contador3 = 1;
let soma = 0;
while (contador3 <= 100) {
  soma += contador3;
  contador3++;
}
console.log("Soma total de 1 a 100:", soma);
document.getElementById("res-3").innerText = `Soma Total = ${soma}`;

console.log("%c--- ATIVIDADE 4: Pares de 0 a 20 (while) ---", "color: #38bdf8; font-weight: bold; font-size: 12px;");
let contador4 = 0;
let out4 = "";
while (contador4 <= 20) {
  if (contador4 % 2 === 0) {
    console.log(contador4);
    out4 += contador4 + " ";
  }
  contador4++;
}
document.getElementById("res-4").innerText = out4;

console.log("%c--- ATIVIDADE 5: Regressivo 10 a 1 (do...while) ---", "color: #38bdf8; font-weight: bold; font-size: 12px;");
let contador5 = 10;
let out5 = "";
do {
  console.log(contador5);
  out5 += contador5 + " ";
  contador5--;
} while (contador5 >= 1);
document.getElementById("res-5").innerText = out5;

console.log("%c--- ATIVIDADE 6: Propriedades do Objeto (for...in) ---", "color: #38bdf8; font-weight: bold; font-size: 12px;");
const usuario = {
  nome: "Carlos Silva",
  idade: 28,
  cargo: "Desenvolvedor",
  departamento: "TI"
};
let out6 = "";
for (let chave in usuario) {
  const linha = `${chave}: ${usuario[chave]}`;
  console.log(linha);
  out6 += linha + "\n";
}
document.getElementById("res-6").innerText = out6;

console.log("%c--- ATIVIDADE 7: Média das Notas (array) ---", "color: #38bdf8; font-weight: bold; font-size: 12px;");
const notas = [8.5, 7.0, 9.5, 6.0, 10.0];
let somaNotas = 0;
for (let i = 0; i < notas.length; i++) {
  somaNotas += notas[i];
}
const media = somaNotas / notas.length;
console.log("Notas do aluno:", notas);
console.log("Média final:", media.toFixed(2));
document.getElementById("res-7").innerText = `Notas: [${notas.join(", ")}]\nMédia: ${media.toFixed(2)}`;

console.log("%c--- ATIVIDADE 8: Ímpares de 1 a 50 ---", "color: #38bdf8; font-weight: bold; font-size: 12px;");
let out8HTML = "";
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    out8HTML += `<span class="badge">${i}</span>`;
  }
}
document.getElementById("res-8").innerHTML = out8HTML;

console.log("%c--- ATIVIDADE 9: Contagem Regressiva de 10 a 0 ---", "color: #38bdf8; font-weight: bold; font-size: 12px;");
let out9 = "";
for (let i = 10; i >= 0; i--) {
  console.log(i);
  out9 += i + (i === 0 ? " (Fim!)" : " -> ");
}
document.getElementById("res-9").innerText = out9;