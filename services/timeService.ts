export const getTime = async () => {
  const res = await fetch(`http://worldtimeapi.org/api/timezone/Europe/Paris`);
  const data = await res.json();
  return data.datetime;
};
