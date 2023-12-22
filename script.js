import { tabsData } from "./data.js";
const tabs = document.querySelector(".tabs");
const tabsBtns = document.querySelectorAll(".tab");
const contentTitle = document.querySelector(".content-title");
const contentText = document.querySelector(".content-text");
const image = document.querySelector(".image");

/**
 * Changes the color of the tab by adding the chosen class when the tab is clicked.
 * @param {Event} e
 */
const updateChosenTab = (e) => {
  const id = e.target.dataset.tab;
  tabsBtns.forEach((tab) => {
    //remove chosen class from all the tabs
    tab.classList.remove("chosen");
    //add the chosen class to the tab that's clicked
    if (tab.dataset.tab === id) {
      tab.classList.add("chosen");
    }
  });
};

const handleContentUpdate = (e) => {
  const id = e.target.dataset.tab;
  const content = tabsData.filter((tab) => {
    return tab.title === id;
  });
  const tab=content[0]
  contentText.textContent = tab.text;
  contentTitle.textContent = tab.title;
  image.src = tab.image;
};
tabs.addEventListener("click", (e) => {
  updateChosenTab(e);
  handleContentUpdate(e);
});
