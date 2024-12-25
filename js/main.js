function loadHTML(html){
    // Create a new div element
    const div = document.createElement('div');

    // Set the div's inner HTML to the returned HTML
    div.innerHTML = html;

    // Get the target div
    const targetDiv = document.getElementById('target');

    // Remove the target div's existing content
    targetDiv.innerHTML = '';

    // Append the new div to the target div
    targetDiv.appendChild(div);

    // Call the function
    
  }
function load(aFile,aFunction=null){
fetch(aFile)
  .then(response => response.text())
  .then(html => {
    loadHTML(html);
    if(aFunction!=null){
        aFunction;
    }
  })
  .catch(error => {
    console.error('Error fetching HTML file:', error);
  });
}