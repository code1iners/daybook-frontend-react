const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const hello = async () =>
  fetch(`${SERVER_URL}/hello`).then((res) => res.json());
