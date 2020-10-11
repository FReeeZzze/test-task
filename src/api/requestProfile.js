export const requestProfile = async (data) => {
  return await fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => Promise.reject(err.message));
};
