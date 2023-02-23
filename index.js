let signin_button = document.getElementById("sign_in");
let email = document.getElementById("email");
let password = document.getElementById("password");

let signupData = JSON.parse(localStorage.getItem("signUp"));
let globalarr = [];

signin_button.addEventListener("click", () => {
  let obj = {
    email: email.value,
    password: password.value,
  };
  console.log(obj);
  globalarr.push(obj);
  for (let i = 0; i < globalarr.length; i++) {
    if (
      globalarr[0].email === signupData[i].email &&
      globalarr[0].password === signupData[i].password
    ) {
      window.location.assign("index.html");
      alert("login successfull");
    } else {
      alert("wrong credentials");
      return;
    }
  }
});

let i = 0;
let images = [];
let time = 2000;
images[0] = "./Images/-2-f8a7.jpg";
images[1] = "./Images/105254957714338494-195a.jpg";

function changeImage() {
  let slide_content = document.querySelector(".slide_window_content");
  let image = document.querySelector("#slide_window_image");

  if (i < images.length - 1) {
    slide_content.classList.remove("hidden");
    i++;
  } else {
    i = 0;
    slide_content.classList.add("hidden");
  }
  image.src = images[i];
}

setInterval("changeImage()", time);

// window.onload = changeImage;

function displaysignin() {
  let signin_backdrop = document.querySelector(".backdrop");
  signin_backdrop.classList.remove("hidden");
}

function hideSignIn() {
  let signin_backdrop = document.querySelector(".backdrop");
  signin_backdrop.classList.add("hidden");
}

let container = document.getElementById("phone_accessories_container");
let url = `https://63f636779daf59d1ad846b13.mockapi.io/products/products/`;
getData(url);

async function getData(api) {
  let res = await fetch(api);
  let data = await res.json();
  showData(data);
  console.log(data);
}

function showData(data) {
  container.innerHTML = "";
  data.forEach((ele) => {
    let card = document.createElement("div");
    card.setAttribute("id", "cellphone_card");

    let image = document.createElement("img");
    image.setAttribute("src", ele.image);

    let name = document.createElement("h4");
    name.textContent = ele.name;

    let price = document.createElement("p");
    price.textContent = ele.price;

    card.append(image, name, price);
    container.append(card);
  });
}
