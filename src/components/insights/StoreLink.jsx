export function StoreLink({ icon, children }) {
  return (
    <span className="store-link">
      <img src={icon} alt="" />
      {children}
    </span>
  );
}
