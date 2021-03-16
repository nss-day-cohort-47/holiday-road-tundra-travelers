let attractionCollection = [];

export const useAttractionCollection = () => {
  //Best practice: we don't want to alter the original state, so
  //make a copy of it and then return it
  //The spread operator makes this quick work
  return [...attractionCollection];
}

export const getAttractions = () => {

  return fetch("http://holidayroad.nss.team/bizarreries")
  .then(response => response.json())
  .then(parsedResponse => {
      postCollection = parsedResponse
      return parsedResponse;
  })
}

