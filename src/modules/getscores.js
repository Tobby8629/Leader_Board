const getScore = (name, score) => {
  const getScore = async () => {
    const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/KAGLMYjbeljx2enKnzJX /scores/',
      {
        method: 'post',
        body: JSON.stringify({
          user: name,
          score: score,
        }),
        headers: { 'Content-type': 'application/json' },
      });
    const response = await res.json();
    return response;
  };
  getScore();
};

export default getScore;