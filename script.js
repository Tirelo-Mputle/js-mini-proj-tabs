const tabs = document.querySelector(".tabs");
const tabsBtns = document.querySelectorAll(".tab");

tabs.addEventListener("click", (e) => {
  const id = e.target.dataset.tab;
  tabsBtns.forEach(tab => {
    //remove chosen class from all the tabs
    tab.classList.remove("chosen")
    //add the chosen class to the tab that's clicked
    if(tab.dataset.tab === id){
        tab.classList.add("chosen")
        
    }
  });
});
