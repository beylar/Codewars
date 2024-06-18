async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl);
  const data = await response.json();


  if (!data.jokes || !Array.isArray(data.jokes)) {
      throw new Error(`No jokes at url: ${apiUrl}`);
  }


  const joke = data.jokes.find(j => j.id === jokeId);
  if (!joke) {
      throw new Error(`No jokes found id: ${jokeId}`);
  }

  return {
      saySetup: () => joke.setup,
      sayPunchLine: () => joke.punchLine
  };
}

sayJoke('http://great.jokes/christmas', 1)
  .then(jokeApi => {
      console.log("Setup:", jokeApi.saySetup());
      console.log("Punchline:", jokeApi.sayPunchLine());
  })
  .catch(error => {
      console.error("An error occurred:", error.message);
  });
