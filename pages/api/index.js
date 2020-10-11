export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = await fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: {
        'Content-Type': 'application/json',
        'x-token-access': 'random',
      },
    })
      .then((res) => res.json())
      .catch((err) => Promise.reject(err.message));
    res.status(200).json({
      status: 'ok',
      data: data,
    });
  } else {
    res.status(200).json({
      status: 'ok',
    });
  }
}
