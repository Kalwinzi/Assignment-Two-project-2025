
// Sample products in Chapa Farm
const products = [
  { name: "Fresh Milk", price: 2000 },
  { name: "Goat Meat", price: 10000 },
  { name: "Egg Tray", price: 8500 }
];

// Function to list products
function showProducts() {
  console.log("Welcome to Chapa Farm!");
  console.log("Here are our available products:\n");
  products.forEach((product, index) => {
    console.log(`index + 1.{product.name} - TZS product.price`);
  );


// Function to simulate placing an order
function placeOrder(productIndex, quantity, customerName) 
  const product = products[productIndex - 1];
  if (!product) 
    console.log("Invalid product selected.");
    return;
  

  const total = product.price * quantity;
  const message = `Hello, I am{customerName}. I would like to order quantity of{product.name} from Chapa Farm. Total: TZS ${total}.`;

  // Encode message for WhatsApp
  const encodedMessage = encodeURIComponent(message);
const waLink = `https://wa.me/{phoneNumber}?text=encodedMessage`;

  console.log("✅ Order Summary:");
  console.log(`Product:{product.name}`);
  console.log(`Quantity: quantity`);
  console.log(`Total: TZS{total}`);
  console.log("\n📲 Send this order on WhatsApp:");
  console.log(waLink);
}

// Usage example
showProducts();
placeOrder(1, 2, "Kalwinzi");
