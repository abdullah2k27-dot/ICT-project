// ============================================
// Apple Store - Advanced JavaScript
// World-Class Functionality
// ============================================

// Product Database
const products = [
    { id: 1, name: 'iPhone 17 Pro Max', price: 1299, desc: 'The ultimate iPhone with largest display and pro features.', specs: '6.9-inch Super Retina XDR display, A19 Pro chip, 48MP Fusion camera, Up to 30 hours video playback', category: 'iPhone', images: ['https://www.apple.com/v/iphone-17-pro/d/images/meta/iphone-17-pro_specs__gfp19rktodm6_og.png'], colors: ['Black'] },
    { id: 2, name: 'iPhone 17 Pro', price: 1099, desc: 'Powerful pro iPhone for creators.', specs: '6.3-inch Super Retina XDR display, A19 Pro chip, 48MP Fusion camera, Up to 26 hours video playback', category: 'iPhone', images: { 'Black Titanium': 'https://cdn.wccftech.com/wp-content/uploads/2024/11/iPhone-17-Pro.jpg', 'White Titanium': 'https://www.digitaltrends.com/wp-content/uploads/2025/10/iphone-17-pro4.jpg?resize=1200%2C720&p=1', 'Gold Titanium': 'https://images.macrumors.com/t/KGy6xZuvHYwuHy0acfW1-sbn0B0=/2500x/article-new/2024/11/iPhone-17-Pro-Dual-Tone-Feature-1.jpg', 'Blue Titanium': 'https://i.ytimg.com/vi/UhiLr1H73Xs/maxresdefault.jpg' }, colors: ['Black Titanium', 'White Titanium', 'Gold Titanium', 'Blue Titanium'], defaultImage: 'https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/tile/Apple-iPhone-17-Pro-camera-close-up-250909-lp.jpg.landing-big_2x.jpg' },
    { id: 3, name: 'iPhone 17', price: 799, desc: 'The standard iPhone with great performance.', specs: '6.1-inch Super Retina XDR display, A19 chip, 48MP camera, Up to 22 hours video playback', category: 'iPhone', images: ['https://www.apple.com/newsroom/images/2025/09/apple-debuts-iphone-17/article/Apple-iPhone-17-color-lineup-250909_big.jpg.large.jpg'], colors: ['Black'] },
    { id: 4, name: 'iPhone Air', price: 999, desc: 'Slim and powerful iPhone.', specs: '6.6-inch Super Retina XDR display, A19 chip, 48MP camera, Up to 24 hours video playback', category: 'iPhone', images: ['https://www.apple.com/newsroom/images/2025/09/introducing-iphone-air-a-powerful-new-iphone-with-a-breakthrough-design/article/Apple-iPhone-Air-color-lineup-250909_big.jpg.large.jpg'], colors: ['Black'] },
    { id: 5, name: 'iPhone 16 Pro', price: 999, desc: 'Previous gen pro model at a great price.', specs: '6.3-inch Super Retina XDR display, A18 Pro chip, 48MP Fusion camera, Up to 27 hours video playback', category: 'iPhone', images: ['https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-240909-lp.jpg.landing-big_2x.jpg'], colors: ['Black'] },
    { id: 6, name: 'iPad Pro 13" M5', price: 1299, desc: 'Ultimate iPad for professionals.', specs: '13-inch Ultra Retina XDR display, M5 chip, Apple Pencil Pro support, Up to 10 hours battery', category: 'iPad', images: ['https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-finish-select-202405-13inch-spaceblack-glossy-wifi_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=YXpaUEtKWGhlNnNrVGZkTEo4T0xsNDByMHhIZkdBbFEwRFROUE9ubkFjTVVmMWkxN1U3QnRGTCt1bW5qUllQWGV0VFB1eEFsUkZXTUZIa3dLUEgvS05VRWVXSzdKNmQ4OUR2Q1RTYjk0V1lnK05jcGhxb0ZEQ0VxMXp5VmNrSEZxVUlyT2pReWpWRG9sWTcydDFOSUQxYlp3VEhDTUNkYW5KVzZxSkp5TGFr&traceId=1'], colors: ['Space Black'] },
    { id: 7, name: 'iPad Pro 11" M5', price: 999, desc: 'Compact pro iPad.', specs: '11-inch Ultra Retina XDR display, M5 chip, Apple Pencil Pro support, Up to 10 hours battery', category: 'iPad', images: ['https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-finish-select-202405-11inch-spaceblack-glossy-wifi_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=YXpaUEtKWGhlNnNrVGZkTEo4T0xsNEsrMGFueUl5dllOTm9xWTIwTHNid1VmMWkxN1U3QnRGTCt1bW5qUllQWGV0VFB1eEFsUkZXTUZIa3dLUEgvS05VRWVXSzdKNmQ4OUR2Q1RTYjk0V1lnK05jcGhxb0ZEQ0VxMXp5VmNrSEZxVUlyT2pReWpWRG9sWTcydDFOSUQxTkNhQllaajMwUWt6S2Fhakd2SHJV&traceId=1'], colors: ['Space Black'] },
    { id: 8, name: 'iPad Air 13" M3', price: 799, desc: 'Large screen iPad Air.', specs: '13-inch Liquid Retina display, M3 chip, Apple Pencil support, Up to 10 hours battery', category: 'iPad', images: ['https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-storage-select-202405-13inch-space-gray-wificell_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=TENLTVRoeFdHUUI5ZE1ZZmxpQUlNMm5pQUoxb0NIVEJFSjRVRzZ4dzV5VE52YTlHWkltOWpNQVF4Y3VwTzdmWDVoai9QdVZsd05XSjFFZlB2LzZ0S3Q3Wm5jOURrRzIvazZEaUx4STB1b2NBS0NYR1lzNTJBZnhmWkV5YklkWC9QUVlGSjRmeHhna1BsRCtWZkhaTnRuSGpUeEZVYW5DSmQ3ektPL3FNc3Bn&traceId=1'], colors: ['Space Gray'] },
    { id: 9, name: 'iPad Air 11" M3', price: 599, desc: 'Portable iPad Air.', specs: '11-inch Liquid Retina display, M3 chip, Apple Pencil support, Up to 10 hours battery', category: 'iPad', images: ['https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/122241-122242-ipad-air-11inch-13inch-m3.png'], colors: ['Space Gray'] },
    { id: 10, name: 'iPad mini', price: 499, desc: 'Compact iPad for on-the-go.', specs: '8.3-inch Liquid Retina display, A17 Pro chip, Apple Pencil support, Up to 10 hours battery', category: 'iPad', images: ['https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-mini-finish-unselect-gallery-1-202410_FMT_WHH?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=eDJDc00wczl1QWk5QmpVYitFNXQwOVgrSXpWVEhWaW9YTGlWRHFoSHU0OU5kSm1CUVBEcU8zQkpHajljMmVyNDFHNjlCSGljd3lKZmVzelVwRHRBMENrakpGNnhCWWJJa3RUVzhiczBkd2hHbEFOT0RtejRYbWpsdnprTVVkdE5paGZkd3VhZGNwcVl2YUFWZWUxQnhR&traceId=1'], colors: ['Space Gray'] },
    { id: 11, name: 'MacBook Air 13" M4', price: 999, desc: 'Thin and light MacBook.', specs: '13.6-inch Retina display, M4 chip, 16GB unified memory, Up to 18 hours battery', category: 'Mac', images: ['https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-air-og-202503?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1739216814915'], colors: ['Midnight'] },
    { id: 12, name: 'MacBook Air 15" M4', price: 1299, desc: 'Larger screen MacBook Air.', specs: '15.3-inch Retina display, M4 chip, 16GB unified memory, Up to 18 hours battery', category: 'Mac', images: ['https://www.cnet.com/a/img/resize/d1e736fdfcd8cf23814a79924d09bbc837b41975/hub/2025/03/10/5be87892-1e71-4723-a739-68df8bfc311c/m4-macbook-air-15-10.jpg?auto=webp&width=1200'], colors: ['Midnight'] },
    { id: 13, name: 'MacBook Pro 14" M5', price: 1599, desc: 'Pro performance MacBook.', specs: '14.2-inch Liquid Retina XDR display, M5 chip, 16GB unified memory, Up to 22 hours battery', category: 'Mac', images: ['https://www.apple.com/newsroom/images/2025/10/apple-unveils-new-14-inch-macbook-pro-powered-by-the-m5-chip/article/Apple-MacBook-Pro-14-in-hero-251015_big.jpg.large.jpg'], colors: ['Space Black'] },
    { id: 14, name: 'MacBook Pro 16" M5', price: 1999, desc: 'Largest pro MacBook.', specs: '16.2-inch Liquid Retina XDR display, M5 Pro chip, 32GB unified memory, Up to 22 hours battery', category: 'Mac', images: ['https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mbp-og-202510?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1758663225828'], colors: ['Space Black'] },
    { id: 15, name: 'Apple Watch Series 11', price: 399, desc: 'Advanced health tracking watch.', specs: 'Always-On Retina display, S11 SiP, Blood Oxygen app, Up to 18 hours battery', category: 'Watch', images: ['https://www.apple.com/v/apple-watch-series-11/b/images/overview/product-viewer/product_landing_endframe__eaytrp6zz6c2_large.jpg'], colors: ['Rose Gold'] },
    { id: 16, name: 'Apple Watch SE 3', price: 249, desc: 'Affordable Apple Watch.', specs: 'Retina display, S10 SiP, Heart Rate app, Up to 18 hours battery', category: 'Watch', images: ['https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYJ33ref_VW_34FR+watch-case-40-aluminum-starlight-nc-se3_VW_34FR+watch-face-40-aluminum-starlight-se3_VW_34FR?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=L1VPMlk5ZkpkOVFZR3Fud25vckh4RStGZUJWLzNFUFVydllxZFp0d1M4NktoaXQwYi9wRGFOV2FsZVA1S1dYc01zdmlsQnpTM2JsTW1CL2FMcHR1ZUl3ZVlaMG9GekEwc3V1SXQ4RHBUY09LaGl0MGIvcERhTldhbGVQNUtXWHN3cVN2b2d1T00zNGpwWGphRE1oeEFXemNQSWJ2a2JtV1hsQkJ3VG5DOEJielBNeGI5bjR6ZDJ0enlUeldZenhOT1F0RExjTU1iejFQeXZCeU03TEFUdw'], colors: ['Starlight'] },
    { id: 17, name: 'Apple Watch Ultra 3', price: 799, desc: 'Rugged adventure watch.', specs: 'Always-On Retina display, S11 SiP, Depth gauge, Up to 36 hours battery', category: 'Watch', images: ['https://www.apple.com/v/apple-watch-ultra-3/b/images/overview/highlights/highlights_satellite__ftgl6qyfpkia_large.jpg'], colors: ['Titanium'] },
    { id: 18, name: 'AirPods Pro 3', price: 249, desc: 'Pro earbuds with ANC.', specs: 'Active Noise Cancellation, Spatial Audio, Up to 6 hours listening time', category: 'AirPods', images: ['https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-3-hero-select-202509_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=1758077264181'], colors: ['White'] },
    { id: 19, name: 'AirPods 4 with ANC', price: 179, desc: 'Earbuds with noise cancellation.', specs: 'Active Noise Cancellation, Spatial Audio, Up to 5 hours listening time', category: 'AirPods', images: ['https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-anc-select-202409_FMT_WHH?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1725502639798'], colors: ['White'] },
    { id: 20, name: 'AirPods Max', price: 549, desc: 'Over-ear headphones.', specs: 'Active Noise Cancellation, Spatial Audio, Up to 20 hours listening time', category: 'AirPods', images: ['https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/og-airpods-max-202409?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1724144125817'], colors: ['Space Gray'] }
];

// State Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentFilter = 'All';

// ============================================
// Toast Notification System
// ============================================
function showToast(message, type = 'success') {
    // Remove existing toasts
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icons = {
        success: '✓',
        error: '✕',
        warning: '⚠',
        info: 'ℹ'
    };
    
    toast.innerHTML = `
        <span class="toast-icon">${icons[type]}</span>
        <span class="toast-message">${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Auto remove
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============================================
// Page Navigation
// ============================================
function showPage(pageId) {
    // Update active page
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update active nav link
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`nav a[onclick*="'${pageId}'"]`);
    if (activeLink) activeLink.classList.add('active');
    
    // Page-specific actions
    if (pageId === 'products') loadProducts();
    if (pageId === 'cart') loadCart();
    if (pageId === 'checkout') {
        document.getElementById('payment-form').style.display = 'none';
        loadCheckoutSummary();
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// Products Page
// ============================================
function loadProducts(filter = currentFilter) {
    currentFilter = filter;
    const list = document.getElementById('product-list');
    list.innerHTML = '';
    
    // Filter products
    const filteredProducts = filter === 'All' 
        ? products 
        : products.filter(p => p.category === filter);
    
    if (filteredProducts.length === 0) {
        list.innerHTML = '<div class="no-products">No products found in this category.</div>';
        return;
    }
    
    filteredProducts.forEach((product, index) => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.style.animationDelay = `${index * 0.05}s`;
        
        const imgSrc = Array.isArray(product.images) 
            ? product.images[0] 
            : (product.defaultImage || Object.values(product.images)[0]);
        
        const isInWishlist = wishlist.includes(product.id);
        const isInCart = cart.find(i => i.id === product.id);
        
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${imgSrc}" alt="${product.name}" loading="lazy">
                <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" onclick="toggleWishlist(${product.id}, event)">
                    ${isInWishlist ? '♥' : '♡'}
                </button>
                <span class="product-category">${product.category}</span>
            </div>
            <div class="product-info">
                <h2>${product.name}</h2>
                <p class="product-price">$${product.price.toLocaleString()}</p>
                <p class="product-desc">${product.desc}</p>
                <div class="product-actions">
                    <button class="btn-secondary" onclick="viewDetails(${product.id})">
                        <span>View Details</span>
                    </button>
                    <button class="btn-primary ${isInCart ? 'in-cart' : ''}" onclick="addToCart(${product.id})">
                        <span>${isInCart ? '✓ In Cart' : 'Add to Cart'}</span>
                    </button>
                </div>
                <button class="btn-buy-now" onclick="buyNow(${product.id})">
                    <span>Buy Now</span>
                    <span class="btn-arrow">→</span>
                </button>
            </div>
        `;
        list.appendChild(card);
    });
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
}

// ============================================
// Product Details
// ============================================
function viewDetails(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    
    const content = document.getElementById('details-content');
    const isArray = Array.isArray(product.images);
    const colors = product.colors || [];
    const defaultImg = isArray 
        ? product.images[0] 
        : (product.defaultImage || Object.values(product.images)[0]);
    
    const isInWishlist = wishlist.includes(product.id);
    const isInCart = cart.find(i => i.id === product.id);
    
    content.innerHTML = `
        <div class="details-grid">
            <div class="details-image">
                <img id="detail-image" src="${defaultImg}" alt="${product.name}">
            </div>
            <div class="details-info">
                <span class="details-category">${product.category}</span>
                <h1>${product.name}</h1>
                <p class="details-price">$${product.price.toLocaleString()}</p>
                <p class="details-desc">${product.desc}</p>
                
                <div class="details-specs">
                    <h3>Specifications</h3>
                    <p>${product.specs}</p>
                </div>
                
                ${colors.length > 1 ? `
                <div class="color-selector">
                    <h3>Select Color</h3>
                    <div class="color-options">
                        ${colors.map((color, i) => `
                            <button class="color-btn ${i === 0 ? 'active' : ''}" 
                                onclick="changeColor('${color}', ${id})" 
                                title="${color}">
                                ${color}
                            </button>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
                
                <div class="details-actions">
                    <button class="btn-wishlist ${isInWishlist ? 'active' : ''}" onclick="toggleWishlist(${id})">
                        ${isInWishlist ? '♥ In Wishlist' : '♡ Add to Wishlist'}
                    </button>
                    <button class="btn-secondary" onclick="addToCart(${id})">
                        ${isInCart ? '✓ In Cart' : 'Add to Cart'}
                    </button>
                    <button class="btn-primary btn-large" onclick="buyNow(${id})">
                        Buy Now - $${product.price.toLocaleString()}
                    </button>
                </div>
            </div>
        </div>
    `;
    
    showPage('product-details');
}

function changeColor(color, id) {
    const product = products.find(p => p.id === id);
    if (product && product.images[color]) {
        document.getElementById('detail-image').src = product.images[color];
    }
    
    // Update active button
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.trim() === color);
    });
}

// ============================================
// Wishlist Functionality
// ============================================
function toggleWishlist(id, event) {
    if (event) event.stopPropagation();
    
    const index = wishlist.indexOf(id);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('Removed from wishlist', 'info');
    } else {
        wishlist.push(id);
        showToast('Added to wishlist! ♥', 'success');
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
    // Refresh current view
    if (document.getElementById('products').classList.contains('active')) {
        loadProducts();
    }
}

// ============================================
// Cart Functionality
// ============================================
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity++;
        showToast(`${product.name} quantity updated!`, 'success');
    } else {
        cart.push({ id, quantity: 1 });
        showToast(`${product.name} added to cart!`, 'success');
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    
    // Refresh products view if on that page
    if (document.getElementById('products').classList.contains('active')) {
        loadProducts();
    }
}

function buyNow(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    
    // Add to cart if not already there
    const item = cart.find(i => i.id === id);
    if (!item) {
        cart.push({ id, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    
    showToast(`Proceeding to checkout with ${product.name}!`, 'success');
    
    // Go to checkout
    setTimeout(() => showPage('checkout'), 500);
}

function loadCart() {
    const items = document.getElementById('cart-items');
    items.innerHTML = '';
    
    if (cart.length === 0) {
        items.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added any products yet.</p>
                <button class="btn-primary" onclick="showPage('products')">
                    Start Shopping
                </button>
            </div>
        `;
        document.getElementById('cart-total').textContent = '0';
        document.getElementById('cart-summary').style.display = 'none';
        return;
    }
    
    document.getElementById('cart-summary').style.display = 'block';
    let total = 0;
    
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            const imgSrc = Array.isArray(product.images) 
                ? product.images[0] 
                : (product.defaultImage || Object.values(product.images)[0]);
            
            const subtotal = product.price * item.quantity;
            total += subtotal;
            
            const div = document.createElement('div');
            div.classList.add('cart-item');
            div.innerHTML = `
                <img src="${imgSrc}" alt="${product.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h3>${product.name}</h3>
                    <p class="cart-item-price">$${product.price.toLocaleString()}</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                    <span class="qty-value">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <div class="cart-item-subtotal">
                    <p>$${subtotal.toLocaleString()}</p>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    ✕
                </button>
            `;
            items.appendChild(div);
        }
    });
    
    document.getElementById('cart-total').textContent = total.toLocaleString();
    document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function updateQuantity(id, qty) {
    if (qty < 1) {
        removeFromCart(id);
        return;
    }
    
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity = parseInt(qty);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
        updateCartBadge();
    }
}

function removeFromCart(id) {
    const product = products.find(p => p.id === id);
    cart = cart.filter(i => i.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    updateCartBadge();
    
    if (product) {
        showToast(`${product.name} removed from cart`, 'info');
    }
}

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    updateCartBadge();
    showToast('Cart cleared', 'info');
}

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (badge) {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// ============================================
// Checkout Functionality
// ============================================
function loadCheckoutSummary() {
    const summary = document.getElementById('checkout-summary');
    if (!summary) return;
    
    if (cart.length === 0) {
        summary.innerHTML = `
            <div class="empty-checkout">
                <p>Your cart is empty. Add some products first!</p>
                <button class="btn-primary" onclick="showPage('products')">Browse Products</button>
            </div>
        `;
        return;
    }
    
    let total = 0;
    let itemsHtml = '';
    
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            const subtotal = product.price * item.quantity;
            total += subtotal;
            itemsHtml += `
                <div class="checkout-item">
                    <span>${product.name} × ${item.quantity}</span>
                    <span>$${subtotal.toLocaleString()}</span>
                </div>
            `;
        }
    });
    
    summary.innerHTML = `
        <h3>Order Summary</h3>
        <div class="checkout-items">${itemsHtml}</div>
        <div class="checkout-total">
            <span>Total</span>
            <span class="total-amount">$${total.toLocaleString()}</span>
        </div>
    `;
}

function showPayment(type) {
    document.getElementById('payment-form').style.display = 'block';
    document.getElementById('card-fields').style.display = type === 'card' ? 'block' : 'none';
    document.getElementById('cod-fields').style.display = type === 'cod' ? 'block' : 'none';
    
    // Update button states
    document.querySelectorAll('#checkout-options button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// ============================================
// User Authentication
// ============================================
function updateAuthUI() {
    const loginLink = document.querySelector('a[onclick*="login"]');
    const signupLink = document.querySelector('a[onclick*="signup"]');
    
    if (currentUser) {
        if (loginLink) {
            loginLink.textContent = currentUser.name.split(' ')[0];
            loginLink.onclick = () => showUserMenu();
        }
        if (signupLink) {
            signupLink.textContent = 'Logout';
            signupLink.onclick = () => logout();
        }
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showToast('Logged out successfully', 'success');
    location.reload();
}

// ============================================
// Form Handlers
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Payment Form
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="loading-spinner"></span> Processing...';
            submitBtn.disabled = true;
            
            // Simulate processing
            setTimeout(() => {
                cart = [];
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartBadge();
                showPage('confirmation');
                showToast('Order placed successfully! 🎉', 'success');
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // Login Form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                currentUser = user;
                localStorage.setItem('currentUser', JSON.stringify(user));
                showToast(`Welcome back, ${user.name}! 👋`, 'success');
                this.reset();
                showPage('home');
                updateAuthUI();
            } else {
                showToast('Invalid email or password', 'error');
            }
        });
    }
    
    // Signup Form
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[placeholder="Name"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            const phone = this.querySelector('input[placeholder="Phone"]').value;
            
            // Check if email exists
            if (users.find(u => u.email === email)) {
                showToast('Email already registered!', 'error');
                return;
            }
            
            // Validate
            if (password.length < 6) {
                showToast('Password must be at least 6 characters', 'error');
                return;
            }
            
            const newUser = { name, email, password, phone, joined: new Date().toISOString() };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            showToast('Account created successfully! 🎉', 'success');
            this.reset();
            showPage('login');
        });
    }
    
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="loading-spinner"></span> Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showToast('Message sent successfully! We\'ll get back to you soon. 📧', 'success');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1000);
        });
    }
    
    // Initialize
    updateCartBadge();
    updateAuthUI();
    showPage('home');
    
    // Add search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            searchProducts(query);
        });
    }
});

// ============================================
// Search Functionality
// ============================================
function searchProducts(query) {
    if (!query) {
        loadProducts(currentFilter);
        return;
    }
    
    const list = document.getElementById('product-list');
    list.innerHTML = '';
    
    const results = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.desc.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );
    
    if (results.length === 0) {
        list.innerHTML = `
            <div class="no-products">
                <h3>No products found for "${query}"</h3>
                <p>Try searching for something else</p>
            </div>
        `;
        return;
    }
    
    results.forEach((product, index) => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.style.animationDelay = `${index * 0.05}s`;
        
        const imgSrc = Array.isArray(product.images) 
            ? product.images[0] 
            : (product.defaultImage || Object.values(product.images)[0]);
        
        const isInCart = cart.find(i => i.id === product.id);
        
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${imgSrc}" alt="${product.name}" loading="lazy">
                <span class="product-category">${product.category}</span>
            </div>
            <div class="product-info">
                <h2>${product.name}</h2>
                <p class="product-price">$${product.price.toLocaleString()}</p>
                <p class="product-desc">${product.desc}</p>
                <div class="product-actions">
                    <button class="btn-secondary" onclick="viewDetails(${product.id})">View Details</button>
                    <button class="btn-primary ${isInCart ? 'in-cart' : ''}" onclick="addToCart(${product.id})">
                        ${isInCart ? '✓ In Cart' : 'Add to Cart'}
                    </button>
                </div>
                <button class="btn-buy-now" onclick="buyNow(${product.id})">
                    <span>Buy Now</span>
                    <span class="btn-arrow">→</span>
                </button>
            </div>
        `;
        list.appendChild(card);
    });
}

// Initial load
showPage('home');
