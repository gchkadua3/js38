const apiUrl = 'https://fakestoreapi.com/products';

axios.get(apiUrl).then(response => {
    const products = response.data;
    const cardContainers = document.querySelectorAll('.axiosImport');

    cardContainers.forEach((cardContainer, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        const product = products[index];
        card.innerHTML = `
            <img src=${product.image}>
            <p class="price">Price: ${product.price}</p>
            <div class="twoSvgs">
                <img onclick="pir()" class ="svgStyle" src="imgs/Add To Cart.png" alt="" >
                <img src="imgs/Wish List.png" alt="" srcset="">
              </div>
        `;
        cardContainer.appendChild(card);
    });
});



const shopCart = document.querySelector('.counter p');
let count = 0;

const pir = () => {
    count++;
    shopCart.textContent = count;
}