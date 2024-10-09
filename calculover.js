document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();
    
    if (name1 === '' || name2 === '') {
        alert('Please enter both names');
        return;
    }
    
    const loveScore = calculateLoveScore(name1, name2);
    
    document.getElementById('result').textContent = `${name1} and ${name2} have a love score of ${loveScore}%`;
});

function calculateLoveScore(name1, name2) {
    const combinedNames = name1.toLowerCase() + name2.toLowerCase();
    let sum = 0;
    
    for (let i = 0; i < combinedNames.length; i++) {
        sum += combinedNames.charCodeAt(i);
    }
    
    return sum % 101; // Return a percentage between 0 and 100
}
