
// Function to speak the phone number
function speakPhoneNumber(phoneNumber) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance();

  // Convert the phone number into spaced format (e.g. 0 7 1 2 ...)
  const spacedNumber = phoneNumber.split('').join(' ');

  utterance.text = `Your phone number is: ${spacedNumber}`;
  utterance.lang = 'en-US'; // English
  synth.speak(utterance);
}

// Example usage:
const phone = '0712345678';
speakPhoneNumber(phone);
