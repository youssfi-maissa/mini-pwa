function addToCart(product) {
alert(product + " ajouté au panier !");
}


if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('sw.js')
.then(() => console.log('Service Worker enregistré'))
.catch(err => console.log('Erreur SW', err));
}