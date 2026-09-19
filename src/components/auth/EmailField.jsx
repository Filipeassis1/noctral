export function EmailField({ value, onChange }) {
  return (
    <div className="input-group">
      <label htmlFor="email">E-mail de acesso</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Example@email.com"
        autoComplete="email"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
