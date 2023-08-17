//your code here
// Given array of band names
let bandNames = ['The Rolling Stones', 'Aerosmith', 'The Beatles', 'Red Hot Chili Peppers', 'Led Zeppelin'];

// Function to remove articles and sort lexicographically
function sortBandNames(bandNames) {
  const articles = ['the', 'a', 'an'];

  // Custom sorting function
  function customSort(a, b) {
    const cleanA = a.replace(/^the |^a |^an /i, ''); // Remove article from the beginning
    const cleanB = b.replace(/^the |^a |^an /i, ''); // Remove article from the beginning
    return cleanA.localeCompare(cleanB);
  }

  return bandNames.sort(customSort);
}

// Sort the band names
const sortedBandNames = sortBandNames(bandNames);

// Get the ul element to append the list items
const ul = document.getElementById('band');

// Add sorted band names to the ul element
sortedBandNames.forEach(bandName => {
  const li = document.createElement('li');
  li.textContent = bandName;
  ul.appendChild(li);
});
