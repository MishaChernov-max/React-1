import { useState } from "react";
import { ColorSelector } from "../ColorSelector/ColorSelector";
import { PreviewBox } from "../PreviewBox/PreviewBox";

export function MainComponent() {
  const [value, setValue] = useState<string>("default");
  return (
    <div>
      <ColorSelector value={value} setValue={setValue} />
      <PreviewBox background={value} />
    </div>
  );
}
