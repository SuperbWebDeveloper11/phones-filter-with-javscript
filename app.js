const addForm = document.forms["add-phone"];
const phoneList = document.querySelector("#phone-list");
const filterByNumber = document.querySelector("#filter-by-number");
const filterByName = document.querySelector("#filter-by-name");

// // add new element when form submission
// addForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // grab number and name from the from
//   const number = document.querySelector("#number").value;
//   const name = document.querySelector("#name").value;

//   // create new li element
//   const numberSpan = document.createElement("span");
//   numberSpan.textContent = number;
//   const nameSpan = document.createElement("span");
//   nameSpan.textContent = name;
//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "X";
//   const li = document.createElement("li");
//   li.appendChild(numberSpan);
//   li.appendChild(nameSpan);
//   li.appendChild(deleteBtn);

//   // add li element to ul
//   phoneList.appendChild(li);
// });

// add new element when form submission
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // grab number and name from the from
  const number = document.querySelector("#number").value;
  const name = document.querySelector("#name").value;

  // create new tr element
  const numberSpan = document.createElement("td");
  numberSpan.textContent = number;

  const nameSpan = document.createElement("td");
  nameSpan.textContent = name;

  const deleteTd = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteTd.appendChild(deleteBtn);

  const tr = document.createElement("tr");

  tr.appendChild(numberSpan);
  tr.appendChild(nameSpan);
  tr.appendChild(deleteTd);

  // add tr element to ul
  phoneList.appendChild(tr);
});

// remove an element when the user click on delete button
phoneList.addEventListener("click", (e) => {
  // grab the element which the user clicked on
  if (e.target.nodeName === "BUTTON") {
    const li = e.target.parentElement.parentElement;
    // delete element
    li.remove();
  }
});

// filter phones by numbers
filterByNumber.addEventListener("keyup", (e) => {
  // get input value
  const inputValue = e.target.value;
  const numbers = phoneList.querySelectorAll("tr td:nth-child(1)");
  Array.from(numbers).forEach((item) => {
    const number = item.textContent;
    if (number.toLowerCase().indexOf(inputValue.toLowerCase()) === -1) {
      item.parentElement.style.display = "none";
    } else {
      item.parentElement.style.display = "block";
    }
  });
});

// filter phones by names
filterByName.addEventListener("keyup", (e) => {
  // get input value
  const inputValue = e.target.value;
  const names = phoneList.querySelectorAll("tr td:nth-child(2)");
  Array.from(names).forEach((item) => {
    const name = item.textContent;
    if (name.toLowerCase().indexOf(inputValue.toLowerCase()) === -1) {
      item.parentElement.style.display = "none";
    } else {
      item.parentElement.style.display = "inherit";
    }
  });
});
