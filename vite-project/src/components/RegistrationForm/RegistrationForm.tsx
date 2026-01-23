import "./RegistrationForm.css";
import { useId, useState } from "react";

export function RegistrationForm() {
  const baseId = useId();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    city: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSubmit = () => {
    console.log(formData);
  };
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        maxWidth: "300px",
        margin: "0 auto",
        marginTop: "200px",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <label htmlFor={`${baseId}-name`}>Имя:</label>
        <input
          type="text"
          id={`${baseId}-name`}
          value={formData.name}
          name="name"
          onChange={handleChange}
        />
        <label htmlFor={`${baseId}-email`}>Почта:</label>
        <input
          type="text"
          id={`${baseId}-email`}
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
        <label htmlFor={`${baseId}-password`}>Пароль:</label>
        <input
          type="password"
          id={`${baseId}-password`}
          value={formData.password}
          name="password"
          onChange={handleChange}
        />
        <label htmlFor={`${baseId}-age`}>Возраст:</label>
        <input
          type="text"
          id={`${baseId}-age`}
          value={formData.age}
          name="age"
          onChange={handleChange}
        />
        <label htmlFor={`${baseId}-city`}>Город:</label>
        <input
          type="text"
          id={`${baseId}-city`}
          value={formData.city}
          name="city"
          onChange={handleChange}
        />
        <button type="submit" style={{ display: "none" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
