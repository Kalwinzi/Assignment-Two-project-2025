
const today = new Date();
const options = {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  hour: '2-digit', minute: '2-digit', second: '2-digit'
};

console.log("Today is: " + today.toLocaleDateString("en-US", options));
