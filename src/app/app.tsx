
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/mainPage/mainPage';
import LoginPage from '../pages/loginPage/loginPage';
import FavoritesPage from '../pages/favoritesPage/favoritesPage';
import OfferPage from '../pages/offerPage/offerPage';
import Page404 from '../pages/page404/page404';
import PrivateRoute from '../privateRoute/privateRoute';
import { AuthorizationStatus } from '../const';
import { favoritesMock } from '../mocks/favotites';
import { useAppSelector } from '../hocks';
import LoadingPage from '../pages/loadingPage/loadingPage';


function App(): JSX.Element {
  const isLoading = useAppSelector((state) => state.loadingState);
  if (isLoading){
    return (
      <LoadingPage />
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MainPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='favorites' element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.AUT}>
              <FavoritesPage favoriteOffersList={favoritesMock} />
            </PrivateRoute>
          }
          />
          <Route path='offer/:id' element={
            <OfferPage />
          }
          />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
