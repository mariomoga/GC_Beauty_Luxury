// Logica esistente per aprire/chiudere il modal
const prodotti = document.querySelectorAll('.prodotto');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalPrice = document.getElementById('modal-price');
const closeModal = document.querySelector('.close');

prodotti.forEach(prodotto => {
  prodotto.addEventListener('click', () => {
    const img = prodotto.dataset.img;
    const nome = prodotto.dataset.nome;
    const desc = prodotto.dataset.desc;
    const prezzo = prodotto.dataset.prezzo;
    const prezzoOriginale = prodotto.dataset.prezzoOriginale;

    modalImg.src = img;
    modalTitle.textContent = nome;
    modalDesc.textContent = desc;
    if (prezzoOriginale && prezzoOriginale !== prezzo) {
      modalPrice.innerHTML = `
        <strong>Prezzo:</strong>
        <span class="old-price">${prezzoOriginale}</span>
        <span class="sale-price">${prezzo}</span>
      `;
    } else {
      modalPrice.innerHTML = `<strong>Prezzo:</strong> <span class="sale-price">${prezzo}</span>`;
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // blocca lo scroll
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// === LOGICA PER SFONDO ===
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const bgImg = getQueryParam('bg');
if (bgImg) {
  document.body.style.setProperty('--dynamic-bg', `url('../immagini/${bgImg}')`);
}
