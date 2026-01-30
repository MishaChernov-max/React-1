import type { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children: ReactNode;
  styles: React.CSSProperties;
  onClick?: (...args: any) => void;
}

export function Button({
  children,
  isLoading,
  styles,
  onClick,
  ...props
}: Props) {
  return (
    <button
      onClick={onClick}
      style={styles}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
