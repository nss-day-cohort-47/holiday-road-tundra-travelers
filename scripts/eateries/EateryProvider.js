let eateriesCollection = [];

export const useEateriesCollection = () => {
  //Best practice: we don't want to alter the original state, so
  //make a copy of it and then return it
  //The spread operator makes this quick work
  return [...eateriesCollection];
}

export const getEateries = () => {

  return fetch("http://holidayroad.nss.team/eateries")
  .then(response => response.json())
  .then(parsedResponse => {
      eateriesCollection = parsedResponse
      return parsedResponse;
  })
}

