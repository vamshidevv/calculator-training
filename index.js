let inpt = document.getElementById("totalVal");

let btns = document.querySelectorAll("#btn");

let prevBtn = document.getElementById("Prev");

let recent = document.getElementById("prevInp");
let removeRecent = document.getElementById("rmv");
recent.innerHTML = " ";

let display = "";

let storeData = "";
let validate = "";

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    validate = e.target.innerHTML;
    if (validate == "=") {
      // display = eval(display.replace(/×/g, "*"));

      storeData = display;
      display = eval(storeData);
      inpt.value = display;
    } else if (validate == "AC") {
      display = "";
      inpt.value = display;
    } else if (validate == "DEl") {
      display = display.toString().slice(0, -1);
      inpt.value = display;
    } else if (validate == "%") {
      if (inpt.value == "") {
        display += validate;
        inpt.value = display;
      } else {
        display = eval(display) / 100;
        inpt.value = display;
      }
    }

    // else if (validate == "%") {
    //   // display = eval(display.replace(/×/g, "*")) / 100;
    //   display = eval(display) / 100;
    //   inpt.value = display;
    // }
    else if (validate == ".") {
      if (inpt.value == "" ) {
        // it works only one time cause first time the input box  is empty
        display += "0.";
        inpt.value = display;
      } else {
        display += validate;
        inpt.value = display;
      }
    } else if (inpt.value !== "") {
      display += validate;
      inpt.value = display;
    }

    // else if (validate == "X") {
    //   display += "×";
    //   inpt.value = display;
    // }
    else {
      console.log("button pressed");
      display += validate; // 100 * 10
      inpt.value = display;

      console.log(" =>" + typeof display);
    }
  });
});

prevBtn.addEventListener("click", () => {
  if (storeData === "") {
    recent.innerHTML = "No History Yet";
    recent.style.display = "block";
    removeRecent.style.display = "block";
  } else {
    recent.innerHTML = storeData + " = " + eval(storeData);
    recent.style.display = "block";
    removeRecent.style.display = "block";
  }
});

removeRecent.addEventListener("click", () => {
  // recent.innerHTML = " ";
  // inpt.value = "";
  recent.style.display = "none";
  removeRecent.style.display = "none";
  storeData = "";
});
