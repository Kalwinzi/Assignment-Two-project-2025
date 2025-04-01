// Lazy loading images
const lazyImages = document.querySelectorAll('img.lazy-load');
lazyImages.forEach(img => {
  img.src = img.dataset.src;
  img.classList.remove('lazy-load');
});

// Caching assets (service worker mock)
function cacheAssets() {
  const assets = ['index.html', 'styles.css', 'script.js'];
  localStorage.setItem('assets', JSON.stringify(assets));
}

cacheAssets();
