// Add some JavaScript code for the Download.html page
function initiate(){
    var button = document.getElementById("download");
    button.addEventListener("click", submitDownloadData);
}
function submitDownloadData(){
    var operation = document.getElementById("operation");
    var operationChoice = operation.value;
    var operatingSystemText = document.getElementById("operating-system");
    operatingSystemText.innerHTML = "Download SOTJ for " + operationChoice + ".";
}
window.addEventListener("load", initiate);
