function calculateLoveScore(name1, name2) {
  const combinedNames = (name1.toLowerCase() + name2.toLowerCase()).normalize('NFKD');
  let sum = 0;
  
  for (let i = 0; i < combinedNames.length; i++) {
    sum += combinedNames.codePointAt(i);
  }
  
  return (sum % 101); // Return a percentage between 0 and 100
}
