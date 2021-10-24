export const clockFormat = (digit, unit, isPrevious) => {
  if (isPrevious) {
    if (unit !== 'Hours') {
      digit = digit === 60 ? 0 : digit;
    } else {
      digit = digit === 24 ? 0 : digit;
    }
  }
  return digit < 10 ? `0${digit}` : digit;
};