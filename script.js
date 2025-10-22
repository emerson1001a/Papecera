
document.addEventListener('DOMContentLoaded', function(){
  function show(id){ document.querySelectorAll('.page').forEach(p=>p.style.display='none'); document.getElementById(id).style.display='block'; }
  document.querySelectorAll('[data-nav]').forEach(b=>b.addEventListener('click', ()=> show(b.getAttribute('data-nav'))));
  show('inicio');
  document.querySelectorAll('.details-btn').forEach(b=>b.addEventListener('click', function(){
    const modal=document.getElementById('modal'); document.getElementById('modal-title').textContent=this.dataset.name;
    document.getElementById('modal-desc').textContent=this.dataset.desc; document.getElementById('modal-price').textContent='R$ '+parseFloat(this.dataset.price).toFixed(2)+' (25% off)';
    document.getElementById('modal-img').src=this.dataset.img; modal.style.display='flex';
  }));
  document.getElementById('modal-close').addEventListener('click', ()=> document.getElementById('modal').style.display='none');
  let cart=[];
  document.querySelectorAll('.add-to-cart').forEach(b=>b.addEventListener('click', function(){ cart.push(this.dataset.name); document.getElementById('cart-count').textContent=cart.length; alert(this.dataset.name+' adicionado ao carrinho'); }));
  document.getElementById('buy-btn').addEventListener('click', function(){ alert('Compra simulada! Obrigado.'); cart=[]; document.getElementById('cart-count').textContent=0; });
  if('serviceWorker' in navigator){ navigator.serviceWorker.register('service-worker.js').catch(()=>{}); }
});
