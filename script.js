
const generatememeBtn = document.querySelector(".meme-generator .meme-btn")

const memeImg = document.querySelector(".meme-generator img")
const memeTitle = document.querySelector(".meme-generator .meme-title")
const memeauthor = document.querySelector(".meme-generator .meme-author")

const updateFile = (url, title,author)=>{
    memeImg.setAttribute("src", url);

    memeTitle.innerHTML=title;
    memeauthor.innerHTML=   `Meme by: ${author}`;

}
const generatememe = ()=>{
    fetch("https://meme-api.com/gimme")
    .then((response) => response.json())
    .then((data) => updateFile(data.url, data.title, data.author))
    .catch((error) => console.error("Error fetching meme:", error));
}
generatememeBtn.addEventListener("click",generatememe);