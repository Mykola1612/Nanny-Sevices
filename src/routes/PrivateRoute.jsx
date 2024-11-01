// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectAuthenticated } from 'redux/selectors';

const PrivateRoute = ({ children, navigateTo = '/home' }) => {
  const authenticated = true;

  return authenticated ? children : <Navigate to={navigateTo} replace />;
};

export default PrivateRoute;
