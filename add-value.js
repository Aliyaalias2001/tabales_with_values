document.addEventListener("DOMContentLoaded", function () {
    // Table 1 data
    const table1Data = {
      A1: 41,
      A2: 18,
      A3: 21,
      A4: 63,
      A5: 2,
      A6: 53,
      A7: 5,
      A8: 57,
      A9: 60,
      A10: 93,
      A11: 28,
      A12: 3,
      A13: 90,
      A14: 39,
      A15: 80,
      A16: 88,
      A17: 49,
      A18: 60,
      A19: 26,
      A20: 28,
    };

    // Calculate values for Table 2
    const alphaValue = table1Data.A5 + table1Data.A20;
    const betaValue = table1Data.A15 / table1Data.A7;
    const charlieValue = table1Data.A13 * table1Data.A12;

    // Update Table 2 with calculated values
    document.getElementById("alpha-value").textContent = alphaValue;
    document.getElementById("beta-value").textContent = betaValue;
    document.getElementById("charlie-value").textContent = charlieValue;
  });