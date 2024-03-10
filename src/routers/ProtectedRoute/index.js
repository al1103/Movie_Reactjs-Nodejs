import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Assuming Redux is used

const ProtectedRoute = ({ children, ...rest }) => {
  const isAdmin = useSelector((state) => state.Movie.user.username === "admin");

  return (
    <Route 
     />
  );
};

export default ProtectedRoute;
