// Add wall dimension inputs dynamically based on the number of walls
document.getElementById("husType").addEventListener("change", function() {
  update();
});
document.getElementById("UVærdiInput").addEventListener("change", function() {
  update();
});

function update() {
  // Get the dropdown element and the selected option
  var dropdown = document.getElementById("husType");
  var selectedOption = dropdown.options[dropdown.selectedIndex].value;

  // Get the current UV value from the input field and the warning and threshold elements
  let UVærdi = document.getElementById("UVærdiInput").value;
  const UWarn = document.getElementById("UVærdiWarning");
  const UTærskel = document.getElementById("UVærdiTærskel");

  // Set the UV threshold based on the selected option using a switch statement
  switch (selectedOption) {
    case "Paracelhus":
      UVærdiTærskel = 0.12;
      break;
    case "Sommerhus":
      UVærdiTærskel = 0.25;
      break;
  }

  // Set the text content of an element to display the threshold value for a selected option
  UTærskel.textContent = `UVærdiTærskel for ${selectedOption} :  ${UVærdiTærskel}`;

  // Check if the current UV value is above the threshold
  if (UVærdi > UVærdiTærskel) {
    // If the UV value is above the threshold, display a warning message in red text
    UWarn.textContent = `UVærdien er for lav`;
    UWarn.style = "color: red;";
  } else {
    // If the UV value is below or equal to the threshold, display a message indicating it is good enough in white text
    UWarn.textContent = "UVærdien er for god nok";
    UWarn.style = "color: black;";
  }
}
