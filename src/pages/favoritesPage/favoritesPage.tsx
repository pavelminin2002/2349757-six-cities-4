import { Link } from 'react-router-dom';
import HeaderLogo from '../../components/headerLogo/headerLogo';
import { OfferType } from '../../types/types';
import FavoriteOffersList from '../../components/favoriteOffersList/favoriteOffersList';
import { CITIES } from '../../const';

type FavoritesProps = {
  favoriteOffersList: OfferType[];
};

function FavoritesPage({ favoriteOffersList }: FavoritesProps): JSX.Element {
  const cityFavorites: JSX.Element[] = [];
  CITIES.map((city) => {
    const offers = favoriteOffersList.filter((offer) => offer.city.name === city.name);
    if (offers.length !== 0) {
      cityFavorites.push(
        <li key={city.name} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#todo">
                <span>{city.name}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            <FavoriteOffersList favoriteOffersList={offers} />
          </div>
        </li>
      );
    }
  });

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <HeaderLogo />
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="#todo">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="#todo">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              { cityFavorites }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
