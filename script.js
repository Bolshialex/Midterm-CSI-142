//Turning in on github. No full name.
//Creating filler jobs
let jobListings = [
  {
    title: "Cloud infrastructure architect",
    type: "Full-Time",
    location: "Seattle, WA",
    postedDate: "Jan 11, 2024",
  },
  {
    title: "Computer systems manager",
    type: "Full-Time",
    location: "Seattle, WA",
    postedDate: "Dec 15, 2023",
  },
  {
    title: "Database administrator",
    type: "Part-Time",
    location: "Seattle, WA",
    postedDate: "Dec 20, 2023",
  },
  {
    title: "Data analyst",
    type: "Part-Time",
    location: "Bellevue, WA",
    postedDate: "Jan 20, 2024",
  },
  {
    title: "Back-end developer",
    type: "Full-Time",
    location: "Bellevue, WA",
    postedDate: "Jan 10, 2024",
  },
  {
    title: "UI (user interface) designer",
    type: "Full-Time",
    location: "Bellevue, WA",
    postedDate: "Nov 10, 2023",
  },
  {
    title: "Service desk analyst",
    type: "Part-Time",
    location: "Redmond, WA",
    postedDate: "Dec 19, 2023",
  },
  {
    title: "Software engineer",
    type: "Full-Time",
    location: "Renton, WA",
    postedDate: "Dec 20, 2023",
  },
  {
    title: "Project manager",
    type: "Full-Time",
    location: "Redmond, WA",
    postedDate: "Feb 1, 2024",
  },
  {
    title: "Portfolio manager",
    type: "Part-Time",
    location: "Redmond, WA",
    postedDate: "Feb 5, 2024",
  },
];

//Adds event listener to the document to load the listings onto the page
document.addEventListener("DOMContentLoaded", popJobListings());

//function that iterates through the job listings and places them into the jobs class to give them styling 
function popJobListings() {
  let jobListingsContainer = document.getElementById("job-listings");

  for (let i = 0; i < jobListings.length; i++) {
    let jobDivInfo = document.createElement("div");
    jobListingsContainer.appendChild(jobDivInfo);
    jobDivInfo.classList.add("job");

    jobDivInfo.innerHTML = `<h3>${jobListings[i].title}</h3>
                                \n<p>Location: ${jobListings[i].location}</p>
                                \n<p>Employment Type: ${jobListings[i].type}</p>
                                \n<p>Posted Date: ${jobListings[i].postedDate}</p>
                                \n<button>Apply Now</button>`;
  }
}

//Validation form function that looks at all of the inputs and makes sure they are correct. Returns true or false
function validateForm() {

  const nameInput = document.getElementById("name").value;
  const emailInput = document.getElementById("email").value;
  const locationInput = document.getElementById("location").value;
  const checkboxInput = document.getElementById("terms");

  let validated = true;

  if (nameInput === "") {
    alert("Please enter a value for Name");
    validated = false;
  } else if (!/^[a-zA-Z-' ]+$/.test(nameInput)) {
    alert("Please make a valid name input. (no special characters and numbers)");
    validated = false;
  }

  if (emailInput === "") {
    alert("Please enter a valid email.");
    validated = false;
  }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) {
    alert("The email you entered is invalid");
    validated = false;
  }


  if (locationInput === ""){
    alert("Please enter a location name or zipcode.");
    validated = false;
  }else if (!/^[a-zA-Z0-9]*$/.test(locationInput)){
    alert("Please make a valid location input. (no special characters)");
    validated = false;
  }

  if (checkboxInput.checked === false){
    alert("You must agree to the policies.");
    validated = false;
  }

  return validated;
}

//Clear function that only works if validateForm returns true. Returns true or false
function clearInput(){
  let validate = validateForm(); 

  if(validate === true){
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('location').value = '';
    document.getElementById('terms').checked = false;
    return true;
  }else{
    return false;
  }
}

//Subscribe function that stores the values and posts them onto an alert and if clear input returns true then it will clear the inputs
function subscribe() {
  let nameValue = document.getElementById('name').value;
  let documentValue = document.getElementById('email').value;
  let locationValue = document.getElementById('location').value
  let isChecked = document.getElementById('terms').checked;

  let isCleared = clearInput();


  if(isCleared === true){
    alert(`Name: ${nameValue}\n
    Email: ${documentValue}\n
    Location: ${locationValue}\n
    Is Checked: ${isChecked}`);
  }
}

//Filter jobs function allows the user to use the search bar to find specific jobs that they need
function filterJobs() {
  let divElements = document.getElementsByTagName("div");
  let searchInput = document.getElementById("search-input").value;

  searchInput = searchInput.toLowerCase();

  for (let i = 0; i < jobListings.length; i++) {
    if (!jobListings[i].title.toLowerCase().includes(searchInput)) {
      divElements[i].style.display = "none";
      
    } else {
      divElements[i].style.display = "block";
    }
  }
}
