const http = require("http");

// Dummy product data for men and women
const menProducts = [
    { id: 1, name: "Men's Jeans", brand: "Levi's", price: 2999, color: "Blue", size: "30", category: 'Clothing' },
    { id: 2, name: "Men's Jeans", brand: "Pepe Jeans", price: 2499, color: "Dark Blue", size: "32", category: 'Clothing' },
    { id: 3, name: "Men's Jeans", brand: "Jack & Jones", price: 3199, color: "Black", size: "30", category: 'Clothing' },
    { id: 4, name: "Men's Shoes", brand: "Nice", price: 6999, color: "Blue", size: "8", category: 'Footware' },
    { id: 5, name: "Men's Shoes", brand: "Reebok", price: 4999, color: "Gray", size: "7", category: 'Footware' },
    { id: 6, name: "Men's Shoes", brand: "Addidas", price: 9999, color: "Black", size: "9", category: 'Footware' },
    { id: 7, name: "Men's Watch", brand: "Casio", price: 11999, color: "Blue", strapType: "Leather", category: 'Accessories' },
    { id: 8, name: "Men's T-Shirt", brand: "Levi's", price: 999, color: "White", size: "M", category: 'Clothing' },
    { id: 9, name: "Men's T-Shirt", brand: "Jack & Jones", price: 1199, color: "Maroon", size: "L", category: 'Clothing' },
    { id: 10, name: "Men's T-Shirt", brand: "Spykar", price: 899, color: "White", size: "XL", category: 'Clothing' },

];

const womenProducts = [
    { id: 1, name: "Women's Jeans", brand: "Levi's", price: 2999, color: "Blue", size: "30", category: 'Clothing' },
    { id: 2, name: "Women's Jeans", brand: "Pepe Jeans", price: 2499, color: "Dark Blue", size: "32", category: 'Clothing' },
    { id: 3, name: "Women's Jeans", brand: "Jack & Jones", price: 3199, color: "Black", size: "30", category: 'Clothing' },
    { id: 4, name: "Women's Shoes", brand: "Nice", price: 6999, color: "Blue", size: "8", category: 'Footware' },
    { id: 5, name: "Women's Shoes", brand: "Reebok", price: 4999, color: "Gray", size: "7", category: 'Footware' },
    { id: 6, name: "Women's Shoes", brand: "Addidas", price: 9999, color: "Black", size: "9", category: 'Footware' },
    { id: 7, name: "Women's Watch", brand: "Fastrack", price: 1199, color: "Blue", strapType: "Leather", category: 'Accessories' },
    { id: 8, name: "Women's T-Shirt", brand: "Levi's", price: 999, color: "White", size: "M", category: 'Clothing' },
    { id: 9, name: "Women's T-Shirt", brand: "Jack & Jones", price: 1199, color: "Maroon", size: "L", category: 'Clothing' },
    { id: 10, name: "Women's T-Shirt", brand: "Spykar", price: 899, color: "White", size: "XL", category: 'Clothing' },
];

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to Men and Women Dummy Data');
    } else if (req.url === '/men') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(menProducts.slice(0, 10)));
    } else if (req.url === '/women') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(womenProducts.slice(0, 10)));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
