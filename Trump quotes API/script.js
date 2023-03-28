const quoteName = document.querySelector("#user_name");
//This fetches a quote every time you refresh

//Add in try, catch
const trumpQuote = async () => {
  try {
    const res = await fetch(
      "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
    );
    const data = await res.json();

    const container = document.querySelector(".container");
    const newDataElement = document.createElement("div");
    //Pull out the message from the JSON

    //using destructuring
    let { message } = data;

    newDataElement.innerText = message;
    container.appendChild(newDataElement);
  } catch (error) {
    console.log(error);
  }
};

trumpQuote();

//This is to add the name of a person to a quote
document.querySelector("#submit").addEventListener("click", async (e) => {
  try {
    e.preventDefault();
    const res = await fetch(
      `https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${quoteName.value}`
    );
    const data = await res.json();
    const container = document.querySelector(".container");
    const newDataElement = document.createElement("div");
    newDataElement.innerText = data.message;
    container.appendChild(newDataElement);
  } catch (e) {
    console.log(e);
  }
});
