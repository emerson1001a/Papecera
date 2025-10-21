function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
let carrinho = [];
function addCarrinho(item) {
  carrinho.push(item);
  atualizarCarrinho();
}
function atualizarCarrinho() {
  const lista = document.getElementById('itens');
  lista.innerHTML = '';
  carrinho.forEach(i => {
    const li = document.createElement('li');
    li.textContent = i;
    lista.appendChild(li);
  });
}
function comprar() {
  if (carrinho.length === 0) {
    alert('O carrinho está vazio!');
  } else {
    alert('Compra realizada com sucesso! Obrigado por escolher a Papecera!');
    carrinho = [];
    atualizarCarrinho();
  }
}