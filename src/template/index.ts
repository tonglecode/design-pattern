import Article from "./Article";
import EditableDisplayArticle from "./EditableDisplayArticle";
import SimpleDisplayArticle from "./SimpleDisplayArticle";
import "./style.css";

const content = document.createElement("div");
content.classList.add("content");

const editModeCheckbox = document.createElement("input");
editModeCheckbox.classList.add("edit-mode");
editModeCheckbox.type = "checkbox";

const labelButton = document.createElement("label");
labelButton.innerText = "편집모드";

document.body.append(content);
document.body.append(editModeCheckbox);
document.body.append(labelButton);

const article = new Article(
  "통글코딩 코스",
  ["컴퓨터 활용기초", "design", "world wide web", "typescript", "backend"],
  "tongle coding"
);

const simpleDisplay = new SimpleDisplayArticle(article);
const editableDisplay = new EditableDisplayArticle(article);

content.innerHTML = simpleDisplay.displayHtml();

editModeCheckbox.addEventListener("change", (event) => {
  if ((<HTMLInputElement>event.target).checked) {
    content.innerHTML = editableDisplay.displayHtml();
  } else {
    content.innerHTML = simpleDisplay.displayHtml();
  }
});
