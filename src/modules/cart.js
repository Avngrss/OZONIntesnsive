const cart = () => {
    const cartBtn = document.getElementById('cart'),
    cartModal = document.querySelector('.cart'),
    cartCloseBtn = document.querySelector('.cart-close');

    const openCart = () => {
        cartModal.style.display = 'flex';
    };

    const closeCart = () => {
        cartModal.style.display = 'none';
    }

    cartBtn.addEventListener('click', openCart);
    cartCloseBtn.addEventListener('click', closeCart);
}

export default cart;