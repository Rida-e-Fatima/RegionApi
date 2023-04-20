// This function is used to get timezones from the given Api 
function populateTimezones() {
    const timezoneSelect = document.getElementById("timezone");
    const url = "https://worldtimeapi.org/api/timezone";
    fetch(url)
      .then(response => response.json())
  // data is an ARRAY     
      .then(data => {
        data.forEach(timezone => {
  // Create an element name option        
          const option = document.createElement("option");
  //Set the value in the option which is stred in the timezone variable        
          option.value = timezone;
  // Storee the text         
          option.text = timezone.replace("_", " ");
  //TimezoneSelect Variable ma sary options ko add kiya jata ha         
          timezoneSelect.add(option);
        });
      })
      .catch((error) => {
        // If there's an error, display a message
        resultDiv.innerText = "An error occurred while fetching the data.";
      });
  }
  
  function getTime() {
    const timezone = document.getElementById("timezone").value;
    const url = `https://worldtimeapi.org/api/timezone/${timezone}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const datetime = new Date(data.utc_datetime);
        const hours = datetime.getHours();
        const minutes = datetime.getMinutes();
        const seconds = datetime.getSeconds();
        const offset = data.utc_offset;
  // The line const date = datetime.toDateString(); converts the date and time value obtained from the WorldTime API into a human-readable format using the toDateString() method of the Date object.      
        const date = datetime.toDateString();
        const output = document.getElementById("output");
        output.innerHTML = `Current time in ${timezone.replace("_", " ")}:<br>${hours}:${minutes}:${seconds}<br>UTC offset: ${offset}<br>Date: ${date}`;
      })
      .catch((error) => {
        // If there's an error, display a message
        resultDiv.innerText = "An error occurred while fetching the data.";
      });
  }
  