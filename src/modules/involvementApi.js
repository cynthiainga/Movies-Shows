const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UA1qh5oDK24p7rhA1W5m/comments';

export const sendComment = async (newData) => {
  const response = await fetch(`${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newData),
  });
  return response.text();
};

const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UA1qh5oDK24p7rhA1W5m/comments?item_id=';
export const getComment = async (id) => {
  const res = await fetch(`${URL}${id}`);
  const comments = await res.text();
  return comments;
};
