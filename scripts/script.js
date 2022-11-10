const navArr = [
  {
    imgSrc: "./images/backgrounds/hector-j-rivas-1FxMET2U5dU-unsplash.webp",
    headOne: "Enterprise Security at your fingertips",
    subHead:
      "From Detection to Troubleshooting to Maintenance, we are your partner in managing your enterprises's systems",
  },

  {
    imgSrc:
      "https://image.shutterstock.com/image-photo/attractive-african-young-confident-businesswoman-260nw-1712082700.jpg",
    headOne: "Heading 2",
    subHead: "This is the subHeading",
  },

  {
    imgSrc:
      "https://img.freepik.com/free-photo/aerial-view-business-data-analysis-graph_53876-13390.jpg?w=2000",
    headOne: "Heading 3",
    subHead: "This is the subHeading",
  },

  {
    imgSrc:
      "https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=2000",
    headOne: "Heading 4",
    subHead: "This is the subHeading",
  },
];

const homePageCarousel = document.querySelector(".section-1");
const secOneImage = document.getElementById("secOneImage");
const headOne = document.getElementById("main-head");
const subHead = document.getElementById("sub-head");
const navDots = document.querySelectorAll(".navigator-dots");
const carouselImgDiv = document.querySelector(".section1-img-coontainer");
const carouselTextDiv = document.querySelector(".section1-text-container ");

const navArrow = document.querySelectorAll(".nav-arrow");
let currInd;

navArrow.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let direction = e.currentTarget.dataset.nav;
    navDots[currInd].classList.remove("selected-dot-background");
    if (direction === "left") {
      currInd === 0 ? (currInd = navArr.length - 1) : currInd--;
      secOneImage.setAttribute("src", navArr[currInd].imgSrc);
      carouselImgDiv.classList.add("translate-right-to-left");
      carouselTextDiv.classList.add("translate-right-to-left");
    } else {
      currInd === navArr.length - 1 ? (currInd = 0) : currInd++;
      secOneImage.setAttribute("src", navArr[currInd].imgSrc);
      carouselImgDiv.classList.add("translate-left-to-right");
      carouselTextDiv.classList.add("translate-left-to-right");
    }
    // homePageCarousel.classList.add("translate-right-to-left");
    headOne.innerText = navArr[currInd].headOne;
    subHead.innerText = navArr[currInd].subHead;
    navDots[currInd].classList.add("selected-dot-background");
    setTimeout(() => {
      if (direction === "left") {
        carouselImgDiv.classList.remove("translate-right-to-left");
        carouselTextDiv.classList.remove("translate-right-to-left");
      } else {
        carouselImgDiv.classList.remove("translate-left-to-right");
        carouselTextDiv.classList.remove("translate-left-to-right");
      }
    }, 600);
  });
});

function onLoad() {
  headOne.innerText = navArr[0].headOne;
  subHead.innerText = navArr[0].subHead;
  secOneImage.setAttribute("src", navArr[0].imgSrc);
  navDots[0].classList.add("selected-dot-background");
  currInd = 0;
}

onLoad();
