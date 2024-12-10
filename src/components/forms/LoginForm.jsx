import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { validatePassword, validateUsername } from "../../utils/validation";
import { loginUser } from "../../services/api";
function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    submit: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usernameError = validateUsername(formData.username);
    const passwordError = validatePassword(formData.password);

    if (usernameError || passwordError) {
      setErrors({
        ...errors,
        username: usernameError,
        password: passwordError,
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await loginUser(formData);
      console.log("login response: ", response);

      localStorage.setItem("token", response.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: response.id,
          username: response.username,
          firstName: response.firstName,
          lastName: response.lastName,
          email: response.email,
          image: response.image,
        })
      );
    } catch (error) {
      console.error("login error: ", error);
      setErrors((prev) => ({
        ...prev,
        submit: error.message,
      }));
    }
    setIsLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "username") {
      setErrors((prev) => ({
        ...prev,
        username: validateUsername(value),
      }));
    }
    if (name === "password") {
      setErrors((prev) => ({
        ...prev,
        password: validatePassword(value),
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Kullanıcı Adı: "
        type="text"
        name="username"
        placeholder="bugra"
        value={formData.username}
        onChange={handleChange}
        error={errors.username}
      />

      <Input
        label="şifre: "
        type="password"
        name="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />
      <Button
        type="submit"
        disabled={isLoading || Object.values(errors).some(Boolean)}
      >
        {isLoading ? "giriş yapılıyor" : "giriş yap"}
      </Button>
    </form>
  );
}

export default LoginForm;
