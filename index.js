import Products from './components/Products/Products.js';
import Header from '/components/Header/Header.js'

function render (catalog) {

    const productsStore = localStorageUtil.getProducts();
    const headerComponent = new Header();
    headerComponent.render(productsStore.length);
    headerComponent.subscribeToCart();
    const productsComponent = new Products();
    productsComponent.render(catalog);

}

//https://api.myjson.online/v1/records/b110d3cd-3981-47f3-a9ce-b90c9a48961a
fetch('server/catalog.json')
    .then(res => res.json())
    .then(catalog => {
        render(catalog);
    })
    .catch(error => {
        console.log(error);
    })