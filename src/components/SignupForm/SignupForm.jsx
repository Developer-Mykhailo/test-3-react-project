import React, { useEffect, useState } from "react";

const SignupForm = () => {
  // state
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("signUp-data"); // from storage
    return saved
      ? JSON.parse(saved)
      : { userName: "", email: "", password: "" };
  });
  const { userName, email, password } = formData;

  const [error, setError] = useState(""); // if error

  useEffect(() => {
    const isEmpty = !formData.userName && !formData.email && !formData.password;
    if (!isEmpty) {
      localStorage.setItem("signUp-data", JSON.stringify(formData));
    } else {
      localStorage.removeItem("signUp-data");
    }
  }, [formData]);

  //   handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  // handler submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 digital long");
      return;
    }
    setError("");
    console.log("User registered:", formData);
    setFormData({ userName: "", email: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="userName"
        value={userName}
        required
      />
      <input
        onChange={handleChange}
        type="email"
        name="email"
        value={email}
        required
      />
      <input
        onChange={handleChange}
        type="password"
        name="password"
        value={password}
        required
      />
      <button type="submit">Sign Up</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignupForm;
