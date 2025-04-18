/**Quantity Button */
function increaseQty(btn) {
    const input = btn.parentElement.querySelector("input");
    let currentValue = parseInt(input.value);
    if (currentValue < 20) {
      input.value = currentValue + 1;
    }
  }

  function decreaseQty(btn) {
    const input = btn.parentElement.querySelector("input");
    let currentValue = parseInt(input.value);
    if (currentValue > 1) {
      input.value = currentValue - 1;
    }
  }

  /**Search */
  const searchIcon = document.getElementById('search-icon');
    const searchInput = document.getElementById('search-input');

    searchIcon.addEventListener('click', (e) => {
      e.preventDefault();
      // Toggle visibility
      searchInput.style.display = searchInput.style.display === 'none' ? 'block' : 'none';
      searchInput.focus();
    });


    /**Cart Notification */

    let cartCount = 0;
    const cartCountBadge = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.btn-success');
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Increase cart count
        cartCount++;
  
        // Show and update badge
        cartCountBadge.textContent = cartCount;
        cartCountBadge.style.display = 'inline-block';
      });
    });


  /**Cart Slide*/

  const cartIcon = document.getElementById('cart-icon');
  const cartDrawer = document.getElementById('cart-drawer');
  const closeCart = document.getElementById('close-cart');
  const resetCart = document.getElementById('resetCart');

  cartIcon.addEventListener('click', function (e) {
    e.preventDefault();
    cartDrawer.classList.add('open');
  });

  closeCart.addEventListener('click', function () {
    cartDrawer.classList.remove('open');
  });

  resetCart.addEventListener('click', function () {
    document.querySelector('.cart-drawer-body').innerHTML = '<p>No items yet.</p>';
    document.getElementById('cart-count').style.display = 'none';
  });
    

  /**Checkout Page */
  const checkoutBtn = document.getElementById('checkoutBtn');

  checkoutBtn.addEventListener('click', function () {
    window.location.href = 'checkoutpage.html';
  });