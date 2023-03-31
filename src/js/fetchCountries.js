const baseURL = 'https://restcountries.com/v3.1';

export function fetchCountries(name) {
  return fetch(`${baseURL}/name/${name}`)
    .then(response => {
      if (!response.ok) {
        return Notify.failure('Oops! There is no country with that name!');
      }
      return response.json();
    })
    .catch(error => console.log(error));
}
