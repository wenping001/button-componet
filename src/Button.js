import LocalGroceryStore from "./Icon";
export default function Button({
  variant,
  children,
  disableShadow,
  disabled,
  color,
  size,
  startIcon,
  endIcon
}) {
  return (
    <button
      className={`${variant} ${color} ${
        disableShadow ? "no-shadow" : ""
      } ${disabled} ${size} ${disabled ? "disabled" : ""}`}>
      {startIcon ? <LocalGroceryStore position="start" /> : ""}
      {children}
      {endIcon ? <LocalGroceryStore position="end" /> : ""}
    </button>
  );
}
