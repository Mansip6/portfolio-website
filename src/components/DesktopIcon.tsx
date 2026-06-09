import { PixelIcon } from "./PixelIcon";
import "./DesktopIcon.css";

interface DesktopIconProps {
  label: string;
  icon: string;
  onOpen: () => void;
}

export function DesktopIcon({ label, icon, onOpen }: DesktopIconProps) {
  return (
    <button
      className="desktop-icon"
      onClick={onOpen}
      aria-label={`Open ${label}`}
    >
      <div className="desktop-icon-image">
        <PixelIcon type={icon} size={44} />
      </div>
      <span className="desktop-icon-label">{label}</span>
    </button>
  );
}
