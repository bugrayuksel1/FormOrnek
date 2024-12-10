import { Link } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";
import Card from "../components/ui/Card";
import Urunler from "../components/Urunler";

const Login = () => {
  return (
    <div className="auth-container">
      <Card title="giriş yap">
        <LoginForm />
        <p className="auth-link">
          Hesabınız yok mu? <Link to="/register">Kayıt ol</Link>
        </p>
      </Card>
    </div>
  );
};

export default Login;
