import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import '../css/Login.css';
import StaggeredAnimationWrapper from '../components/StaggeredAnimationWrapper';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { loginUser, isLoggedIn } = useContext(GlobalContext);
  const navigate = useNavigate();

  // If authenticated, redirect to home
  React.useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser({ email, password });
  };

  return (
    <StaggeredAnimationWrapper>
      <div className="login-container">
        <form onSubmit={onSubmit}>
          <h2>Login</h2>
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </StaggeredAnimationWrapper>
  );
}

export default Login;
