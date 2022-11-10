const navArr = [
    {
        imgSrc: "./images/backgrounds/hector-j-rivas-1FxMET2U5dU-unsplash.webp",
        headOne: "Enterprise Security at your fingertips",
        subHead: "From Detection to Troubleshooting to Maintenance, we are your partner in managing your enterprises's systems"
        
    },

    {
        imgSrc: "https://image.shutterstock.com/image-photo/attractive-african-young-confident-businesswoman-260nw-1712082700.jpg",
        headOne: "Heading 2",
        subHead: "This is the subHeading"
    },

    {
        imgSrc: "https://img.freepik.com/free-photo/aerial-view-business-data-analysis-graph_53876-13390.jpg?w=2000",
        headOne: "Heading 3",
        subHead: "This is the subHeading"
    },

    {
        imgSrc: "https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=2000",
        headOne: "Heading 4",
        subHead: "This is the subHeading"
    }
];

const secOneImage = document.getElementById("secOneImage");
const headOne = document.getElementById("headOne");
const subHead = document.getElementById("subHead");

const navLeftArrow = document.querySelector(".navigator-left-arrow");
const navRightArrow = document.querySelector(".navigator-right-arrow");

headOne.addEventListener("click", ()=>{
    alert("hii")
})


    navRightArrow.addEventListener("click", ()=>{
        // secOneImage.setAttribute("src", navArr[i].imgSrc);
        alert("hii")
    })
