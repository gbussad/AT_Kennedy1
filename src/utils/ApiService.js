const ApiService = (url, setData) => {
  fetch(`https://jsonplaceholder.typicode.com${url}`)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.error("Erro ao carregar dados:", error));
};

export default ApiService;
