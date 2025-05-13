<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page History Example</title>
</head>
<body>
  <h2>Browser History Controls</h2>
  <p id="historyLength"></p>

  <button onclick="goBack()">Go Back</button>
  <button onclick="goForward()">Go Forward</button>
  <button onclick="goBackTwo()">Go Back 2 Pages</button>

  <script>
    // Display history length
    document.getElementById("historyLength").textContent = 
      "History length: " + window.history.length;

    // Go back one page
    function goBack() {
      window.history.back();
    }

    // Go forward one page
    function goForward() {
      window.history.forward();
    }

    // Go back two pages
    function goBackTwo() {
      window.history.go(-2);
    }
  </script>
</body>
</html>
