// Get the wall input div
const wallInputs = document.getElementById("wallInputs");

// Add wall dimension inputs dynamically based on the number of walls
document.getElementById("numWalls").addEventListener("change", function() {
  const numWalls = this.value;

  // Clear existing wall inputs
  wallInputs.innerHTML = "";

  for (let i = 1; i <= numWalls; i++) {
    // Create a new wall input fieldset for each wall
    const fieldset = document.createElement("fieldset");
    wallInputs.appendChild(fieldset);

    // Create a new wall input div for each wall
    const wallInputDiv = document.createElement("div");

    // Create labels and inputs for width and height of the wall

    // Wall width
    const widthLabel = document.createElement("label");
    widthLabel.for = `width${i}`;
    widthLabel.textContent = `Wall ${i} width: `;
    wallInputDiv.appendChild(widthLabel);

    const widthInput = document.createElement("input");
    widthInput.type = "float";
    widthInput.id = `wallWidth${i}`;
    widthInput.required = true;
    widthInput.value = 1;
    wallInputDiv.appendChild(widthInput);

    // Wall height
    const heightLabel = document.createElement("label");
    heightLabel.for = `height${i}`;
    heightLabel.textContent = `Wall ${i} height: `;
    wallInputDiv.appendChild(heightLabel);

    const heightInput = document.createElement("input");
    heightInput.type = "float";
    heightInput.id = `wallHeight${i}`;
    heightInput.required = true;
    heightInput.value = 1;
    wallInputDiv.appendChild(heightInput);

    // Add a line break
    wallInputDiv.appendChild(document.createElement("br"));

    // Temperature difference
    const tempLabel = document.createElement("label");
    tempLabel.for = `tempDiff${i}`;
    tempLabel.textContent = `Temperature difference ${i}: `;
    wallInputDiv.appendChild(tempLabel);

    const tempInput = document.createElement("input");
    tempInput.type = "number";
    tempInput.id = `tempDiff${i}`;
    tempInput.required = true;
    tempInput.value = 32;
    wallInputDiv.appendChild(tempInput);

    // UV value
    const UVærdiLabel = document.createElement("label");
    UVærdiLabel.for = `UVærdi${i}`;
    UVærdiLabel.textContent = `UV value ${i}: `;
    wallInputDiv.appendChild(UVærdiLabel);

    const UVærdiInput = document.createElement("input");
    UVærdiInput.type = "float";
    UVærdiInput.id = `UVærdi${i}`;
    UVærdiInput.required = true;
    UVærdiInput.value = 0.1;
    wallInputDiv.appendChild(UVærdiInput);

    // Add the wall input div to the fieldset
    fieldset.appendChild(wallInputDiv);
  }
});
