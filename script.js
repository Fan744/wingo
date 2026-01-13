function predictNext(lastResults) {
    if (lastResults.length !== 5) {
        return "Galat input! Last 5 results chahiye.";
    }
    
    // Sum calculate karo seed ke liye
    let seed = lastResults.reduce((a, b) => a + b, 0);
    // Math.seedrandom(seed); // Seedrandom library add karo agar chahiye, varna simple random
    let nextNum = Math.floor(Math.random() * 10); // Simple random, seed ke bina
    
    // Big/Small decide karo
    let prediction = '';
    if (nextNum <= 4) {
        prediction = `Small (Green) - Number: ${nextNum}`;
    } else {
        prediction = `Big (Green) - Number: ${nextNum}`;
    }
    
    // Agar 0 ya 5 ho to Violet
    if (nextNum === 0 || nextNum === 5) {
        prediction = `Violet - Number: ${nextNum}`;
    }
    // Agar odd (1,3,7,9) ho to Red
    else if ([1, 3, 7, 9].includes(nextNum)) {
        prediction = `Red - Number: ${nextNum}`;
    }
    
    return prediction;
}

document.getElementById('predictionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let period = document.getElementById('period').value;
    let resultsInput = document.getElementById('results').value;
    let lastResults = resultsInput.split(',').map(x => parseInt(x.trim())).filter(n => !isNaN(n));
    
    let prediction = predictNext(lastResults);
    document.getElementById('result').innerText = `Period ${period} ke liye prediction: ${prediction}`;
});
