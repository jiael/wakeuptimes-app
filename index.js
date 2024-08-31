const wakeUpTimesDiv = document.getElementById("wakeup-hours-div"); //gest hold of wakeUpTimesDiv

const clcBtn = document.getElementById("calc-btn");
const refreshBtn = document.getElementById("refresh-btn");
const returnBtn = document.getElementById("return-btn");
const promptSection = document.getElementById("prompt-section");
const imageContainer = document.getElementById("img-container");
const resultSection = document.getElementById("result-section");
 
clcBtn.addEventListener("click", calcSleepTime);
refreshBtn.addEventListener("click", calcSleepTime);
returnBtn.addEventListener("click", () => {
  promptSection.classList.remove("hidden");
  imageContainer.classList.remove("hidden");
  resultSection.classList.add("hidden");
});

function calcSleepTime() {
  const fallAsleepTime = new Date();
  fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14);
  // console.log(
  //   "You will fall sleep at",
  //   fallAsleepTime.toLocaleTimeString("en-US", {
  //     timeStyle: "short",
  //   })
  // );
  

  wakeUpTimesDiv.innerHTML = ""; //clear the previous times

  const wakeUpTime = new Date(fallAsleepTime);
  //const wakeUpTimes = [];
  for (let i = 1; i <= 6; i++) {
    wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
    const wakeUpTimeString = wakeUpTime.toLocaleTimeString("en-US", {
      timeStyle: "short",
    });

    //wakeUpTimes.push(wakeUpTimeString);
    // const sleepCycleDiv = document.getElementById(`cycle-${i}`);
    const sleepCycleDiv = document.createElement("div"); //creates new div element
    sleepCycleDiv.setAttribute("id", `cycle-${i}`);
    sleepCycleDiv.setAttribute("class", `cycle`);
    // sleepCycleDiv.classList.add("cycle"); //does the same thing as line above
    sleepCycleDiv.textContent = wakeUpTimeString;
    
    
    wakeUpTimesDiv.appendChild(sleepCycleDiv);
  }
  
  //console.log("Wake-up times:", wakeUpTimes.join(", "));
  promptSection.classList.add("hidden");
  imageContainer.classList.add("hidden");
  resultSection.classList.remove("hidden")
}

const calcBtn = document.getElementById("calc-btn")
calcBtn.onclick = calcSleepTime;
