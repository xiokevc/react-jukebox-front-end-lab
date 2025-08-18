const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

export const getTracks = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error('Failed to fetch tracks');
  return res.json();
};

export const getTrackById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error('Failed to fetch track');
  return res.json();
};

export const createTrack = async (trackData) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(trackData),
  });
  if (!res.ok) throw new Error('Failed to create track');
  return res.json();
};

export const updateTrack = async (id, trackData) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(trackData),
  });
  if (!res.ok) throw new Error('Failed to update track');
  return res.json();
};

export const deleteTrack = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete track');
  return res.json();
};

console.log('API Base URL:', BASE_URL);
