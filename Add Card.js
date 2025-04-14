// Create the container dynamically
const container = document.createElement('div');
container.id = 'cardContainer';
document.body.appendChild(container);

// Create the button dynamically
const button = document.createElement('button');
button.textContent = 'Add Card';
document.body.insertBefore(button, container);

// Card count
let count = 1;

// Card adder function
function addCard() {
  const card = document.createElement('div');
  card.style.width = '200px';
  card.style.margin = '10px';
  card.style.padding = '15px';
  card.style.background = '#f5f5f5';
  card.style.border = '1px solid #ccc';
  card.style.borderRadius = '8px';
  card.style.boxShadow = '2px 2px 6px rgba(0,0,0,0.1)';

  card.innerHTML = `<h3>Card count</h3><p>This is card number{count}.</p>`;
  container.appendChild(card);
  count++;
}
