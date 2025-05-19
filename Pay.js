<!-- HTML Element to show status -->
<div id="transaction-status"></div>

<script>
  // Function to show transaction completion
  function showTransactionStatus(payment) {
    const statusDiv = document.getElementById("transaction-status");

    if (payment && payment.status === "COMPLETED") {
      statusDiv.innerHTML = `
        <h3>Transaction Complete!</h3>
        <p>Amount: ${payment.amount} ${payment.currency}</p>
        <p>Payment ID: ${payment.identifier}</p>
      `;
    } else {
      statusDiv.innerHTML = `<p>Transaction not completed. Please try again.</p>`;
    }
  }

  // Simulated payment object after successful transaction
  const simulatedPayment = {
    amount: 5,
    currency: "π",
    identifier: "txn_12345",
    status: "COMPLETED"
  };

  // Show transaction status (use real payment object from Pi SDK in actual implementation)
  showTransactionStatus(simulatedPayment);
</script>
