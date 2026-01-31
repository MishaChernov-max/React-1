import { useState, type InputHTMLAttributes } from "react";

type FormData = {
  cardNumber: string;
  expiry: string;
  cvc: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type FormTouched = Partial<Record<keyof FormData, boolean>>;

type Field = {
  name: string;
  value: string;
  blur?: boolean;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

type Props = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "onBlur" | "name" | "value"
> &
  Field;

function FormInput({
  name,
  value,
  blur,
  onBlur,
  onChange,
  error,
  ...props
}: Props) {
  return (
    <>
      <input
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        {...props}
      />
      {error && blur && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
}

export default function PaymentForm() {
  const [formData, setFormData] = useState<FormData>({
    cardNumber: "",
    cvc: "",
    expiry: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});
  const validate = (formData: FormData): FormErrors => {
    const { cardNumber, expiry, cvc } = formData;
    const formErrors: FormErrors = {};
    if (!cardNumber.trim()) {
      formErrors.cardNumber = "Это поле обязательное для заполнения";
    }
    if (!expiry.trim()) {
      formErrors.expiry = "Это поле обязательное для заполнения";
    }
    if (!cvc.trim()) {
      formErrors.cvc = "Это поле обязательное для заполнения";
    }
    return formErrors;
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errors = validate(formData);
    setErrors(errors);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof FormData]) {
      const updatedFormData = { ...formData, [name]: value };
      const errors = validate(updatedFormData);
      const errorText = errors?.[name as keyof FormData];
      setErrors((prev) => ({ ...prev, [name]: errorText }));
    }
  };
  const onSubmit = () => {
    const keys = Object.keys(formData);
    const allMarked = keys.reduce<Record<string, boolean>>((acc, el) => {
      acc[el] = true;
      return acc;
    }, {});
    setTouched(allMarked);
    const errors = validate(formData);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log(formData);
      setFormData({ cardNumber: "", cvc: "", expiry: "" });
      setTouched({});
    }
  };
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <FormInput
        placeholder="Номер карты"
        name="cardNumber"
        blur={touched?.cardNumber}
        error={errors?.cardNumber}
        onBlur={onBlur}
        value={formData.cardNumber}
        onChange={onChange}
      />
      <FormInput
        placeholder="Срок действия"
        name="expiry"
        blur={touched?.expiry}
        error={errors?.expiry}
        onBlur={onBlur}
        value={formData.expiry}
        onChange={onChange}
      />
      <FormInput
        placeholder="cvc"
        name="cvc"
        blur={touched?.cvc}
        error={errors?.cvc}
        onBlur={onBlur}
        value={formData.cvc}
        onChange={onChange}
      />
      <button type="submit">Оплатить</button>
    </form>
  );
}
