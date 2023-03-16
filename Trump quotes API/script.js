const quoteName = document.querySelector("#user_name");

const trumpQuote = async () => {
  const res = await fetch(
    "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
  );
  const data = await res.json();

  const container = document.querySelector(".container");
  const newDataElement = document.createElement("div");
  newDataElement.innerText = data.message;
  container.appendChild(newDataElement);
};

trumpQuote();

document.querySelector("#submit").addEventListener("click", async (e) => {
  e.preventDefault();
  const res = await fetch(
    `https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${quoteName.value}`
  );
  const data = await res.json();
  const container = document.querySelector(".container");
  const newDataElement = document.createElement("div");
  newDataElement.innerText = data.message;
  container.appendChild(newDataElement);
});
