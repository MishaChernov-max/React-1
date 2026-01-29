import { useState } from "react";

interface FormData {
  name: string;
  profession: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;
type FormTouched = Partial<Record<keyof FormData, boolean>>;

type Props = {
  addUser: (name: string, profession: string) => void;
};

export function AuthForm({ addUser }: Props) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    profession: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});
  const validate = (formData: FormData): FormErrors => {
    const formErrors: FormErrors = {};
    if (!formData.name) {
      formErrors.name = "Поле name обязательно для заполненния";
    } else if (!/^[a-zA-Zа-яА-ЯёЁ\s-]+$/.test(formData.name)) {
      formErrors.name = "Имя не должно содержать спецсимволы";
    }
    if (!formData.profession) {
      formErrors.profession = "Поле profession обязательно для заполненния";
    } else if (!/^[a-zA-Zа-яА-ЯёЁ\s-]+$/.test(formData.profession)) {
      formErrors.profession = "Поле profession  должно содержать спецсимвол";
    }
    return formErrors;
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const validationErrors = validate(formData);
    setErrors(validationErrors);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof FormData]) {
      const nextValues = { ...formData, [name]: value };
      const nextErrors = validate(nextValues);
      setErrors((prev) => ({
        ...prev,
        [name]: nextErrors[name as keyof FormData],
      }));
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    setTouched({
      name: true,
      profession: true,
    });
    if (Object.keys(validationErrors).length === 0) {
      addUser(formData.name, formData.profession);
      setFormData({ name: "", profession: "" });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Создать юзера:</h1>
      <label>
        <h4> Введите имя:</h4>
        <input
          name="name"
          type="text"
          value={formData.name}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </label>
      {touched.name && errors.name && (
        <span
          style={{
            color: "red",
            fontSize: "12px",
            display: "block",
            marginBottom: "20px",
          }}
        >
          {errors.name}
        </span>
      )}
      <label>
        <h4>Введите профессию:</h4>
        <input
          name="profession"
          type="text"
          value={formData.profession}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </label>
      {touched.profession && errors.profession && (
        <span
          style={{
            color: "red",
            fontSize: "12px",
            display: "block",
            marginBottom: "20px",
          }}
        >
          {errors.profession}
        </span>
      )}
      <button type="submit" className="btn-create">
        Создать
      </button>
    </form>
  );
}
