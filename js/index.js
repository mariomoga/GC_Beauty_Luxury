// Controlla se siamo su mobile
const isMobile = window.innerWidth <= 600;

// Seleziona le immagini corrette in base al dispositivo
const images = document.querySelectorAll(
  isMobile
    ? '.mobile-slider img'
    : '.desktop-slider img'
);

let current = 0;
const esploraBtn = document.querySelector('.overlay-content a');

// Funzione per aggiornare il link con immagine attiva
function aggiornaLinkEsplora() {
  const activeImg = images[current];
  const imgSrc = activeImg.getAttribute('src').split('/').pop();
  esploraBtn.href = `prodotti.html?bg=${encodeURIComponent(imgSrc)}`;
}

// Inizializza subito il link
aggiornaLinkEsplora();

// Avvia lo slider
setInterval(() => {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
  aggiornaLinkEsplora();
}, 4000);
