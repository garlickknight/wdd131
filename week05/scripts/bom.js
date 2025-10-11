const input = document.querySelector("#favChapter")
const button = document.querySelector("button")
const list = document.querySelector("#list")



function getchapterList() { }

let chaptersArray = getchapterList() || [];

function getchapterList() { }

chaptersArray.forEach(chapter => { displayList(chapter) });
button.addEventListener("click", () => {
    if (input.value !== "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});

function desplayList(item) {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    
};