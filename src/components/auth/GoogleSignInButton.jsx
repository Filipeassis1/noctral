import { asset } from "../../lib/assets";

export function GoogleSignInButton() {
  return (
    <button className="google-button" type="button">
      <img src={asset("google.svg")} alt="" />
      <span>Entrar com o Google</span>
    </button>
  );
}
