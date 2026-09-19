import { useState } from "react";
import { motion } from "motion/react";
import { asset } from "../../lib/assets";
import { AccessCodeButton } from "./AccessCodeButton";
import { EmailField } from "./EmailField";
import { GoogleSignInButton } from "./GoogleSignInButton";

export function LoginPanel({ reduceMotion }) {
  const [email, setEmail] = useState("");
  const [submitState, setSubmitState] = useState("idle");
  const buttonState = submitState === "idle" ? (email.trim() ? "main" : "disabled") : submitState;
  const animation = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1.25, ease: [0.16, 1, 0.3, 1] },
      };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setSubmitState("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (buttonState !== "main") return;

    setSubmitState("loading");
    await new Promise((resolve) => window.setTimeout(resolve, 1400));
    setSubmitState("success");
  };

  return (
    <section className="auth-panel" aria-labelledby="login-title">
      <motion.form className="login-card" onSubmit={handleSubmit} {...animation}>
        <header className="login-intro">
          <img className="brand-mark" src={asset("logo.png")} alt="Noctralspy" />
          <h1 id="login-title">Bem vindo a Noctralspy</h1>
          <p>Acesse análises de apps, creators e sinais de mercado em um só lugar.</p>
        </header>

        <div className="login-form">
          <EmailField value={email} onChange={handleEmailChange} />
          <AccessCodeButton state={buttonState} />
        </div>

        <div className="account-options">
          <div className="signin-options">
            <div className="divider" aria-hidden="true">
              <span />
              <p>Login social</p>
              <span />
            </div>
            <GoogleSignInButton />
          </div>
          <p className="signup-copy">Não tem conta? <a href="#">Criar conta</a></p>
        </div>

        <p className="copyright">© 2026 TODOS OS DIREITOS RESERVADOS</p>
      </motion.form>
    </section>
  );
}
