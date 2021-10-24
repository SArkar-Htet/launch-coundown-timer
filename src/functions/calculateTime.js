export const calculateTime = (endDate) => {
  const now = new Date().getTime();
  const timeDistance = endDate - now;
  
  let days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDistance % (1000 * 60)) / 1000);

  return {
    timeDistance,
    days,
    hours,
    minutes,
    seconds
  }
}