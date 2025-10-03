import {ReactNode} from "react";

interface HeaderCoreProps {
  title: string;
  description?: string;
  actions?: ReactNode;
}

export default function HeaderCore({title, description, actions}: HeaderCoreProps) {
  return (
    <header
      className="flex items-center justify-between rounded-lg p-4 text-white shadow-md"
      style={{
        backgroundImage: "url('/HeaderCore.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        {description && <p className="text-sm opacity-90">{description}</p>}
      </div>

      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </header>
  );
}
