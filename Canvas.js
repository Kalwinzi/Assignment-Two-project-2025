
const canvas = document.createElement('canvas');
canvas.width = 600;
canvas.height = 400;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

// Sample data (e.g., Weekly Earnings in TZS)
const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const earnings = [100, 200, 150, 300, 250, 400, 350];

// Chart settings
const barWidth = 50;
const gap = 30;
const base = 350;
const xStart = 60;

// Draw X and Y Axis
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50, base);
ctx.lineTo(canvas.width - 50, base);
ctx.strokeStyle = '#000';
ctx.stroke();

// Draw bars and labels
for (let i = 0; i < earnings.length; i++) {
  const barHeight = earnings[i];
  const x = xStart + i * (barWidth + gap);
  const y = base - barHeight;

  // Draw bar
  ctx.fillStyle = '#4CAF50';
  ctx.fillRect(x, y, barWidth, barHeight);

  // Draw value label above bar
  ctx.fillStyle = '#000';
  ctx.fillText(earnings[i] + 'k', x + 10, y - 5);
// Draw day label below bar
  ctx.fillText(labels[i], x + 10, base + 15);
}
