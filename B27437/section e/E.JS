// Rainfall data for the last 10 days in a rural region in Ghana
let rainfallData = [12, 15, 20, 8, 25, 18, 10, 22, 16, 14];

// Using a for loop to print the rainfall recorded each day
console.log("Rainfall recorded in the last 10 days:");
for (let i = 0; i < rainfallData.length; i++) {
    console.log(`Day ${i + 1}: ${rainfallData[i]} mm`);
}
