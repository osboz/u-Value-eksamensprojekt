// Calculate wall area on form submit
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting and reloading the page

  // Set the thermal transmittance values for walls and windows
  let vægUVærdi = 0.16; // U-value for walls
  let vindueUVærdi = 1.3; // U-value for windows

  // Initialize variables for total wall and window area, heat loss, and line lengths
  let totalWallArea = 0;
  let totalWindowArea = 0;
  let wallHeatLoss = 0;
  let windowHeatLoss = 0;
  let groundLineLength = 0;
  let groundlineLoss = 0;
  let windowLineLength = 0;
  let windowlineLoss = 0;

  // Loop through each wall element in the HTML form and calculate its area and heat loss
  for (let i = 1; i <= document.getElementById("numWalls").value; i++) {
    const width = parseFloat(document.getElementById(`wallWidth${i}`).value);
    const height = parseFloat(document.getElementById(`wallHeight${i}`).value);
    const tempT = parseFloat(document.getElementById(`tempDiff${i}`).value);
    const UValue = parseFloat(document.getElementById(`UVærdi${i}`).value);
    const area = width * height;

    // Calculate the heat loss due to the wall
    wallHeatLoss += area * tempT * UValue;

    // Add the wall area to the total wall area
    totalWallArea += area;

    // Add the width to the ground line length
    groundLineLength += width;
  }

  // Loop through each window element in the HTML form and calculate its area and heat loss
  for (let i = 1; i <= document.getElementById("numWindows").value; i++) {
    const width = parseFloat(document.getElementById(`windowWidth${i}`).value);
    const height = parseFloat(document.getElementById(`windowHeight${i}`).value);
    const tempT = parseFloat(document.getElementById(`tempDiff${i}`).value);
    const UValue = parseFloat(document.getElementById(`UVærdi${i}`).value);
    const area = width * height;

    // Calculate the heat loss due to the window
    windowHeatLoss += area * tempT * UValue;

    // Add the width and height to the window line length
    windowLineLength += width * 2 + height * 2;

    // Add the window area to the total window area
    totalWindowArea += area;

    // Subtract the window area from the total wall area
    totalWallArea -= area;
  }

  // Calculate the heat loss due to ground and window lines
  windowlineLoss = windowLineLength * 0.06; // Heat loss due to window lines
  groundlineLoss = groundLineLength * 0.4; // Heat loss due to ground lines

  // Calculate the total heat loss
  let varmeTab = 0;
  varmeTab += wallHeatLoss + windowHeatLoss + windowlineLoss + groundlineLoss;

  // Display the total heat loss on the HTML page
  document.getElementById("varmeTab").textContent = "Heatloss is: " + varmeTab;
});
