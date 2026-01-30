import { useState } from "react";

const TABS = [
  { id: "profile", label: "Это ваш профиль", title: "Профиль" },
  { id: "messages", label: "У вас 5 новых сообщений", title: "Сообщения" },
  { id: "settings", label: "Настройки аккаунта", title: "Настройки" },
];

export default function TabView() {
  const [activeTab, setActiveTab] = useState("profile");
  const activeContent = TABS.find((tab) => tab.id === activeTab)?.label;
  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div>
        {TABS.map((tab) => (
          <button onClick={() => handleClick(tab.id)}>{tab.title}</button>
        ))}
        <p>{activeContent}</p>
      </div>
    </div>
  );
}
