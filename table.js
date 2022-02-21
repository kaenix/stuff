fetch('getSets.json')
    .then(function (response) {
        return response.json();
    })
    .then (function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log(err);
                // If an error occured, you will catch it here
    })
function appendData(data) {
    var mainContainer = document.getElementById("getSets");
    for (var i = 0; i < data.length; i++) {
        //loop thru every object in JSON
        var div = document.createElement("div");
        //creates new div
        div.innerHTML = 'Set Number: ' + data[i].number + '<br>MSRP: ' + LEGOCom.US;
        //fill div with info from json file
        mainContainer.appendChild(div);
        //append div to main container(?)
    }
};
