const createGame = () => {
  const create = async () => {
    const get = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
      {
        method: 'post',
        body: JSON.stringify({ name: 'tobby game' }),
        headers: { 'Content-type': 'application/json' },
      });
    const res = await get.json();
    return res;
  };
  create();
};
export default createGame;
