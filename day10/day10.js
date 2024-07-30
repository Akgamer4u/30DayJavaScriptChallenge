const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const para = document.getElementById("para");
  para.textContent = "lorem56";
});

const img = document.getElementById("img");
img.addEventListener("dblclick", () => {
  img.style.visibility = "hidden";
});

const title = document.getElementById("title");
title.addEventListener("mouseover", () => {
  title.style.backgroundColor = "red";
});
title.addEventListener("mouseout", () => {
  title.style.backgroundColor = "white";
});

const inputs = document.getElementById("text");
if (inputs) {
  inputs.addEventListener("keydown", (e) => {
    console.log(`key pressed is ${e.key}`);
  });
} else {
  console.log('Element with ID "text" not found.');
}

inputs.addEventListener("keyup", (e) => {
  console.log(`key released is ${e.target.value}`);
});

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const formObject = {};

  formData.forEach((data, key) => {
    formObject[key] = data;
  });
  console.log("Form Data:", formObject);
});

const select = document.getElementById("select");
const option=document.getElementById("option");

select.addEventListener("change", (e) => {
  option.textContent=`Your selected option:${e.target.value}`
})

const list=document.getElementById("list");
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(`You clicked on ${e.target.textContent}`);
  }
})

const parent=document.getElementById("parent");
const button =document.getElementById("btn");

parent.addEventListener("click", ( )=> {
    const child=document.createElement("div")
    child.textContent="hello world"
    parent.appendChild(child)
})
