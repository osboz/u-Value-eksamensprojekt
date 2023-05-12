// Get the window input div
const windowInputs = document.getElementById("windowInputs");

// Add window dimension inputs dynamically based on the number of windows
document.getElementById("numWindows").addEventListener("change", function() {
  const numwindows = this.value;

  // Clear existing window inputs
  windowInputs.innerHTML = ""; 

  for (let i = 1; i <= numwindows; i++) {
    // Create a new window input fieldset for each window
    const fieldset = document.createElement("fieldset");
    windowInputs.appendChild(fieldset);

    // Create a new window input div for each window
    const windowInputDiv = document.createElement("div");

    // Create labels and inputs for width and height of the window

    // height width
    const widthLabel = document.createElement("label");
    widthLabel.for = `width${i}`;
    widthLabel.textContent = `Window ${i} width: `;
    windowInputDiv.appendChild(widthLabel);

    const widthInput = document.createElement("input");
    widthInput.type = "float";
    widthInput.id = `windowWidth${i}`;
    widthInput.required = true;
    widthInput.value = 1;
    windowInputDiv.appendChild(widthInput);

    // height

    const heightLabel = document.createElement("label");
    heightLabel.for = `height${i}`;
    heightLabel.textContent = `Window ${i} height: `;
    windowInputDiv.appendChild(heightLabel);

    const heightInput = document.createElement("input");
    heightInput.type = "float";
    heightInput.id = `windowHeight${i}`;
    heightInput.required = true;
    heightInput.value = 1;
    windowInputDiv.appendChild(heightInput);

    // break
    windowInputDiv.appendChild(document.createElement("br"));
    // temp diff

    const tempLabel = document.createElement("label");
    tempLabel.for = `tempDiff${i}`;
    tempLabel.textContent = `temp differnce ${i}: `;
    windowInputDiv.appendChild(tempLabel);

    const tempInput = document.createElement("input");
    tempInput.type = "number";
    tempInput.id = `tempDiff${i}`;
    tempInput.required = true;
    tempInput.value = 32;
    windowInputDiv.appendChild(tempInput);

    // uværdi

    const UVærdiLabel = document.createElement("label");
    UVærdiLabel.for = `UVærdi${i}`;
    UVærdiLabel.textContent = `UVærdi ${i}: `;
    windowInputDiv.appendChild(UVærdiLabel);

    const UVærdiInput = document.createElement("input");
    UVærdiInput.type = "float";
    UVærdiInput.id = `UVærdi${i}`;
    UVærdiInput.required = true;
    UVærdiInput.value = 1.3;
    windowInputDiv.appendChild(UVærdiInput);

    fieldset.appendChild(windowInputDiv);
  }
});
