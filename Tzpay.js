// Chapa Payment Integration for Tanzanian Payments

const CHAPA_API_URL = 'https://api.chapa.co/v1/transaction/initialize';
const CHAPA_AUTH_KEY = 'your_chapa_auth_key_here'; // Replace with your actual Chapa auth key

/**
 * Initialize a payment with Chapa
 * @param {Object} paymentData - Payment details
 * @param {string} paymentData.amount - Payment amount
 * @param {string} paymentData.currency - Currency (TZS for Tanzanian Shillings)
 * @param {string} paymentData.email - Customer email
 * @param {string} paymentData.first_name - Customer first name
 * @param {string} paymentData.last_name - Customer last name
 * @param {string} paymentData.tx_ref - Unique transaction reference
 * @param {string} paymentData.callback_url - Callback URL after payment
 * @param {string} paymentData.return_url - Return URL after payment
 * @param {Object} paymentData.customization - Customization options
 * @returns {Promise<Object>} - Payment initialization response
 */
async function initializeChapaPayment(paymentData) {
    try {
        const response = await fetch(CHAPA_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${CHAPA_AUTH_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error initializing Chapa payment:', error);
        throw error;
    }
}

/**
 * Verify a Chapa payment
 * @param {string} transactionId - Transaction ID to verify
 * @returns {Promise<Object>} - Payment verification response
 */
async function verifyChapaPayment(transactionId) {
    try {
        const response = await fetch(`https://api.chapa.co/v1/transaction/verify/${transactionId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${CHAPA_AUTH_KEY}`,
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error verifying Chapa payment:', error);
        throw error;
    }
}

// Example usage
async function processPayment() {
    const paymentData = {
        amount: '1000', // 1000 TZS
        currency: 'TZS',
        email: 'customer@example.com',
        first_name: 'John',
        last_name: 'Doe',
        tx_ref: 'tx-' + Date.now(), // Unique reference
        callback_url: 'https://yourwebsite.com/payment-callback',
        return_url: 'https://yourwebsite.com/payment-success',
        customization: {
            title: 'Your Farm Name',
            description: 'Payment for farm products'
        }
    };

    try {
        // Initialize payment
        const paymentResponse = await initializeChapaPayment(paymentData);
        console.log('Payment initialized:', paymentResponse);
        
        if (paymentResponse.status === 'success' && paymentResponse.data.checkout_url) {
            // Redirect user to Chapa payment page
            window.location.href = paymentResponse.data.checkout_url;
        }
        
        // Note: After payment, Chapa will redirect to your callback_url where you should verify the payment
    } catch (error) {
        console.error('Payment processing failed:', error);
        // Show error to user
        alert('Payment initialization failed. Please try again.');
    }
}

// Handle payment verification callback (to be implemented on your callback URL page)
async function handlePaymentCallback() {
    const urlParams = new URLSearchParams(window.location.search);
    const transactionId = urlParams.get('transaction_id');
    
    if (transactionId) {
        try {
            const verification = await verifyChapaPayment(transactionId);
            console.log('Payment verification:', verification);
            
            if (verification.status === 'success') {
                // Payment was successful
                alert('Payment successful! Thank you.');
                // Update your database, send confirmation email, etc.
            } else {
                alert('Payment verification failed.');
            }
        } catch (error) {
            console.error('Verification error:', error);
            alert('Error verifying payment. Please contact support.');
        }
    }
}

// Call this function when your callback page loads
// handlePaymentCallback();
