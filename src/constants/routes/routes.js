export const getStartRoute = () => "/start";

export const getCountrieHomeRoute = () => "/countrieHome";

export const getOneCountriRoute = () => `/countrie/:name`;
export const getGenerteOneCountrieRoute = (name) =>
  getOneCountriRoute().replace(":name", name);
