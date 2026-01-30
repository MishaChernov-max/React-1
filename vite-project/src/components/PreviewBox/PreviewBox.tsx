import "./PreviewBox.css";
interface Props {
  background: string;
}

export function PreviewBox({ background }: Props) {
  return <div className="background" style={{ background: background }}></div>;
}
