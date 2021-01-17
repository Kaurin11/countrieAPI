export const getStartRoute = () => '/start';

export const getMainViewRoute = () => '/mainView';

export const getOneCountriRoute = () => `/countrie/:name`;
export const getGenerteOneCountrieRoute = (name) => getOneCountriRoute().replace(':name', name);