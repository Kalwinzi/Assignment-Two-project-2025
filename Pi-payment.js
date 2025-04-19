
<script src="https://sdk.minepi.com/pi-sdk.js"></script>
<script>
  Pi.init({ version: "2.0", sandbox: true });

  Pi.authenticate(['payments'], (payment) => {
    console.log('Incomplete payment found:', payment);
  }).then((auth) => {
    console.log('User authenticated:', auth);

    Pi.createPayment({
      amount: 1.5,
      memo: 'Purchase of 1kg of maize',
      metadata: { productId: 'maize-1kg' }
    }, {
      onReadyForServerApproval: (paymentId) => {
        console.log('Approve payment on server:', paymentId);
      },
      onReadyForServerCompletion: (paymentId, txid) => {
        console.log('Complete payment on server:', paymentId, txid);
      },
      onCancel: (paymentId) => {
        console.log('Payment cancelled:', paymentId);
      },
      onError: (error, payment) => {
        console.error('Payment error:', error, payment);
      }
    }).then((payment) => {
      console.log('Payment created:', payment);
    }).catch((error) => {
      console.error('Error creating payment:', error);
    });

  }).catch((error) => {
    console.error('Authentication error:', error);
  });
</script>
