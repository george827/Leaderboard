const populatelist = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DBBZrUJElZiRYVVhOpvy/scores/');
  await response.json().then((json) => {
    const scorelist = document.querySelector('.score-list');
    json.result.forEach((scores) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
          ${scores.user}: ${scores.score}
      `;
      scorelist.append(listItem);
    });
  });
};
export default populatelist;