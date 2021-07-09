const tabs = document.querySelectorAll(".tab-item");
const panes = document.querySelectorAll(".tab-pane");

const tabActive = document.querySelector(".tab-item.active");
const line = document.querySelector(".line");

line.style.width = tabActive.offsetWidth + "px";
line.style.left = tabActive.offsetLeft + "px";

tabs.forEach((tab, index) => {
  const pane = panes[index];
  
  tab.onclick = function () {
    document.querySelector(".tab-item.active").classList.remove("active"); // Can't use tabActive
    document.querySelector(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});
