for (let i = 0; i < combinedNames.length; i++) {
    sum += combinedNames.charCodeAt(i);
}

return sum % 101; // Return a percentage between 0 and 100
