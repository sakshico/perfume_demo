
const hamburger  = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
const backdrop = document.getElementById('mobileMenuBackdrop');

if(hamburger && mobileMenu){
  hamburger.addEventListener('click', ()=>{
    mobileMenu.classList.add('open');
    hamburger.setAttribute('aria-expanded','true');
  });
  mobileClose.addEventListener('click', ()=>{
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded','false');
  });
  mobileMenu.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click', ()=>{
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded','false');
    });
  });
}
if(backdrop){
  backdrop.addEventListener('click', ()=>{
    mobileMenu.classList.remove('open');
    backdrop.classList.remove('open');
    hamburger.setAttribute('aria-expanded','false');
  });
}

backdrop.addEventListener('click', ()=>{
  mobileMenu.classList.remove('open');
  backdrop.classList.remove('open');
  hamburger.setAttribute('aria-expanded','false');
});
document.querySelectorAll('.shop-card-wrap').forEach(wrap=>{
  wrap.addEventListener('click', (e)=>{
    if(e.target.closest('[data-action="cart"]')) return;
    wrap.classList.toggle('flipped');
  });
});

window.cartItems = window.cartItems || [];

document.querySelectorAll('[data-action="cart"]').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    e.stopPropagation();
    const id = btn.dataset.id;
    const name = btn.closest('.shop-card-wrap').querySelector('.shop-card-name, .shop-back-name')?.textContent;
    addToCart(id, name);
  });
});

function addToCart(id, name){
  window.cartItems.push({id, name});
  document.querySelectorAll('[aria-label="Cart"]').forEach(c=>{
    c.innerHTML = c.innerHTML.replace(/Cart \(\d+\)/, `Cart (${window.cartItems.length})`);
  });
  alert(`${name} added to cart`);
}


const checkoutModal = document.getElementById('checkout-modal');
const checkoutClose  = document.getElementById('checkoutClose');

document.querySelectorAll('[aria-label="Cart"]').forEach(btn=>{
  btn.addEventListener('click', e=>{
    e.preventDefault();
    if(!window.cartItems || !window.cartItems.length){ alert('Cart is empty.'); return; }
    openCheckout();
  });
});

function openCheckout(){
  const summaryEl = document.getElementById('checkoutSummary');
  summaryEl.innerHTML = window.cartItems.map(item=>
    `<div class="checkout-summary-item"><span>${item.name}</span><span>1 item</span></div>`
  ).join('') + `<div class="checkout-summary-total"><span>Total Items</span><span>${window.cartItems.length}</span></div>`;

  checkoutModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout(){
  checkoutModal.classList.remove('open');
  document.body.style.overflow = '';
}

checkoutClose.addEventListener('click', closeCheckout);
checkoutModal.addEventListener('click', e=>{ if(e.target===checkoutModal) closeCheckout(); });

/* show/hide UPI or Card fields based on selected payment method */
document.querySelectorAll('input[name="payment"]').forEach(radio=>{
  radio.addEventListener('change', ()=>{
    document.getElementById('ckUpiId').style.display = radio.value==='upi' && radio.checked ? 'block' : 'none';
    document.getElementById('ckCardFields').style.display = radio.value==='card' && radio.checked ? 'block' : 'none';
  });
});

/* place order — basic validation + confirmation */
document.getElementById('checkoutPlaceOrder').addEventListener('click', ()=>{
  const name = document.getElementById('ckName').value.trim();
  const email = document.getElementById('ckEmail').value.trim();
  const phone = document.getElementById('ckPhone').value.trim();
  const address = document.getElementById('ckAddress').value.trim();
  const city = document.getElementById('ckCity').value.trim();
  const pincode = document.getElementById('ckPincode').value.trim();
  const payment = document.querySelector('input[name="payment"]:checked').value;

  if(!name || !email || !phone || !address || !city || !pincode){
    alert('Please fill in all delivery details.');
    return;
  }
  if(!email.includes('@')){
    alert('Please enter a valid email address.');
    return;
  }

  alert(`Order placed!\n\nDelivering to: ${name}, ${city} - ${pincode}\nPayment: ${payment.toUpperCase()}\n\n(This is a demo — no real payment was processed.)`);
  window.cartItems = [];
  document.querySelectorAll('[aria-label="Cart"]').forEach(c=> c.innerHTML = c.innerHTML.replace(/Cart \(\d+\)/, 'Cart (0)'));
  closeCheckout();
});

(function(){
  const searchBtns = document.querySelectorAll('[aria-label="Search"]');
  let box = document.createElement('div');
  box.style.cssText = 'display:none;position:fixed;top:80px;left:50%;transform:translateX(-50%);background:#0f2436;border:1px solid #c8a060;border-radius:12px;padding:16px;z-index:2000;width:min(400px,90vw)';
  box.innerHTML = `<input id="searchInput2" placeholder="Search perfumes, notes..." style="width:100%;padding:10px;background:#0a1420;border:1px solid rgba(255,255,255,0.15);color:#f0ebe4;border-radius:6px"><div id="searchResults2" style="margin-top:10px;max-height:300px;overflow:auto"></div>`;
  document.body.appendChild(box);

  searchBtns.forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.preventDefault();
      box.style.display = box.style.display==='none' ? 'block' : 'none';
      document.getElementById('searchInput2').focus();
    });
  });

  document.addEventListener('input', e=>{
    if(e.target.id!=='searchInput2') return;
    const q = e.target.value.toLowerCase();
    const cards = Array.from(document.querySelectorAll('.shop-card-wrap'));
    const matches = cards.filter(c=>{
      const text = c.querySelector('.shop-card-name').textContent.toLowerCase()
        + ' ' + Array.from(c.querySelectorAll('.shop-back-note')).map(n=>n.textContent).join(' ').toLowerCase();
      return text.includes(q);
    });
    document.getElementById('searchResults2').innerHTML = matches.map(c=>{
      const name = c.querySelector('.shop-card-name').textContent;
      return `<div style="padding:8px;cursor:pointer;color:#f0ebe4;border-bottom:1px solid rgba(255,255,255,0.1)" onclick="document.querySelector('[data-id=&quot;${c.dataset.id}&quot;]').scrollIntoView({behavior:'smooth'})">${name}</div>`;
    }).join('') || '<p style="color:rgba(255,255,255,0.5);font-size:12px">No matches</p>';
  });
})();

window.addEventListener('DOMContentLoaded', ()=>{
  const hash = window.location.hash.replace('#','');
  if(hash){
    const target = document.querySelector(`.shop-card-wrap[data-id="${hash}"]`);
    if(target){
      target.scrollIntoView({behavior:'smooth', block:'center'});
      target.style.outline = '2px solid #c8a060';
      setTimeout(()=> target.style.outline='', 2000);
    }
  }
});
