const idea = document.querySelector('.idea');
const generate = document.querySelector('.generate');

generate.addEventListener('click', async () => {
  idea.textContent = '';
  try {
    const response = await fetch('https://www.boredapi.com/api/activity');
    const data = await response.json();

    const { activity } = data;

    idea.textContent = activity;
    idea.classList.add('suggestion');
  } catch (e) {
    console.log(e);
  }
});
