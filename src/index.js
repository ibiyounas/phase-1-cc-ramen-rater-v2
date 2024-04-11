// index.js

// Callbacks
const perRamen = (ramenObj) => {
  const menuDiv = document.getElementById("ramen-menu")
  const img = document.createElement("img")
  img.src = ramenObj.image
  img.alt = ramenObj.name
  img.classList.add("image-slider");
  img.addEventListener("click", (event) => handleClick(ramenObj, event))

  menuDiv.appendChild(img);

}

const handleClick = (ramenDetail) => {
  // Add code
  const imgDetail = document.querySelector("#ramen-detail > .detail-image")
  const nameDetail = document.querySelector("#ramen-detail > .name")
  const restaurant = document.querySelector("#ramen-detail > .restaurant")
  const rating = document.getElementById("rating-display")
  const comment = document.getElementById("comment-display")

  imgDetail.src = ramenDetail.image;
  imgDetail.alt = ramenDetail.image;
  nameDetail.innerText = ramenDetail.name;
  restaurant.innerText = ramenDetail.restaurant;
  rating.innerText = ramenDetail.rating.toString();
  comment.innerText = ramenDetail.comment;

};

const handleSubmit = (event) => {
  event.preventDefault();
  const newname = event.target['new-name'].value
  const newrestaurant = event.target.restaurant.value
  const newimage = event.target.image.value
  const newrating = event.target.rating.value
  const newcomment = event.target['new-comment'].value
  const newRamen = { newname, newrestaurant, newimage, newrating, newcomment }
  event.target.reset()
  perRamen(newRamen);
};

const addSubmitListener = () => {
  // Add code
  const Form = document.querySelector("#new-ramen");
  if (Form) {
    Form.addEventListener("submit", handleSubmit);
  }
  
}

const displayRamens = () => {
  // Add code
  fetch("http://localhost:3000/ramens")
  .then((resp) => resp.json())
  .then((data) => {
    document.getElementById("ramen-menu").innerHTML = "";
    data.forEach(perRamen)
  })
  .catch((error) => console.log(error));
};
    

const main = () => {
  // Invoke displayRamens here
  displayRamens();
  // Invoke addSubmitListener here
  addSubmitListener();

  handleSubmit();
  handleClick();
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
  perRamen,
  handleSubmit,
};
