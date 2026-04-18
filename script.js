console.log("Portfolio Loaded");

const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", function(){
    console.log("Navigating to", this.getAttribute("href"));
  });
});

const aboutTabs = document.querySelectorAll(".about-tab");
const aboutContents = document.querySelectorAll(".about-content");

aboutTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = tab.getAttribute("data-about");

    aboutTabs.forEach(item => item.classList.remove("active"));
    aboutContents.forEach(content => content.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});

const toggleMoreBtn = document.getElementById("toggleMoreBtn");
const moreAbout = document.getElementById("moreAbout");

toggleMoreBtn.addEventListener("click", () => {
  moreAbout.classList.toggle("show");

  if (moreAbout.classList.contains("show")) {
    toggleMoreBtn.textContent = "Show Less";
  } else {
    toggleMoreBtn.textContent = "Show More";
  }
});
