//services file where all fetch calls are stored and exported
export const getJson = (url: string) => {
  try {
    return fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .catch(error => {
        console.log(error);
        return error;
      })
  } catch (error) {
    console.log(error)
    return error
  }
}