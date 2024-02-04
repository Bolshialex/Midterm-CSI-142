/*
TODO
1.Create an array of job listing

2.Populate this array with jobs. Append these into the proper elements and reference the proper ids and classes.

3. -Validate all of the inputs and check if the checkbox was checked or not. 
    -Send any errors in the users input if they do not meet the requirements. 
    -Do not let the form submit if something fails.

4. Once all inputs have been validated clear all the inputs in the form

5.Handle the submission properly with a function. Gather the info and "send the data" (alert for now).

6.Create a function that uses the search bar to filer the job listings. Do not use a button.

7.Test all scenarios that are possible and edge cases.
*/



//CHANGE THE DATE
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
    postedDate: "2023-12-15",
  },
  {
    title: "Database administrator",
    type: "Part-Time",
    location: "Seattle, WA",
    postedDate: "2023-12-20",
  },
  {
    title: "Data analyst",
    type: "Part-Time",
    location: "Bellevue, WA",
    postedDate: "2024-1-20",
  },
  {
    title: "Back-end developer",
    type: "Full-Time",
    location: "Bellevue, WA",
    postedDate: "2024-1-10",
  },
  {
    title: "UI (user interface) designer",
    type: "Full-Time",
    location: "Bellevue, WA",
    postedDate: "2023-11-10",
  },
  {
    title: "Service desk analyst",
    type: "Part-Time",
    location: "Redmond, WA",
    postedDate: "2023-12-19",
  },
  {
    title: "Software engineer",
    type: "Full-Time",
    location: "Renton, WA",
    postedDate: "2023-12-20",
  },
  {
    title: "Project manager",
    type: "Full-Time",
    location: "Redmond, WA",
    postedDate: "2024-2-1",
  },
  {
    title: "Portfolio manager",
    type: "Part-Time",
    location: "Redmond, WA",
    postedDate: "2024-2-5",
  },
];

document.addEventListener("DOMContentLoaded", popJobListings());


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

function validateForm() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const locationInput = document.getElementById("location");
  const checkboxInput = document.getElementById("terms");

  
}

function filterJobs(){
  let divElements = document.getElementsByClassName('job');
  let searchInput = document.getElementById('search-input').value;
 searchInput = searchInput.toLowerCase();

  console.log(searchInput);

  for (let i = 0; i < jobListings.length; i++) {
    // if(!){
    //   divElements[i].remove();
    // }
    jobListings[i].title.includes(searchInput) ? null : divElements[i].remove();
  }
}


