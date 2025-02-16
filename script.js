document.getElementById("tourForm").addEventListener("submit",function(event){
    event.preventDefault();

    let fromDate = document.getElementById("fromDate").value;
    let toDate = document.getElementById("toDate").value;
    let companions = document.getElementById("companions").value;
    let budget = document.getElementById("budget").value;
    let destination = document.getElementById("destination").value.trim();

    if (!fromDate || !toDate || !destination) {
        alert("Please fill all firlds!");
        return;
    }

    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        if (data[destination] && data[destination][budget]) {
            let tripDetails = data[destination][budget];
            displayResult(destination,fromDate,toDate,companions,tripDetails);
        } else {
            document.getElementById("result".innerHTML ='<p style="color:red;">No data found for "${destination}".</p>';
            }
        })
        .catch(error => console.error("Enter loading data:",error));
        });

        function displayResult(destination,fromDte,toDate,companions,details){
            let resultDiv = document.getElementById("result");
            resultDiv.innerHTML = '
            <h2>Tour Plan for ${destination}</h2>'
            <p><b>Travel Dates:</b>${fromDate} to {toDate}</p>
            <p><b>Traveling with:</b>${companions}</p>
            <p><b>Stay:</b> ${details.stay}</p>
            <p><b>Places to Visit:</b> ${details places.join(",")}</p>
            <p><b>Activities:</b> ${details.actvities.join(",")}</p>
            ';
        }
    
    
