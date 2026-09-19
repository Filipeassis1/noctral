import { asset } from "../../lib/assets";

const buttonLabels = {
  disabled: "Enviar código de acesso",
  main: "Enviar código de acesso",
  success: "Código enviado",
};

export function AccessCodeButton({ state }) {
  const isLoading = state === "loading";

  return (
    <button
      className={`primary-button is-${state}`}
      type="submit"
      disabled={state !== "main"}
      aria-busy={isLoading}
    >
      {isLoading ? (
        <img className="button-spinner" src={asset("loading-03.svg")} alt="" />
      ) : (
        <span aria-live="polite">{buttonLabels[state]}</span>
      )}
    </button>
  );
}
