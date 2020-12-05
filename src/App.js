import React from "react";
import "./styles.css";
import { FaWhatsapp, FaMailBulk, TextInput, Button } from "react-icons/fa";

export default function App() {
  return (
    <div>
      <header className="head1"></header>
      <header className="head2">
        <h2>&emsp; EducaUB</h2>
      </header>
      <div className="bg" />
      <div className="bg bg2" />
      <div className="bg bg3" />
      <div className="content">
        <div className="thead">
          <b>Painel de login</b>
        </div>
        <b>Usuário</b> <br />
        <form>
          <input type="text" name="name" textAlign={"center"} />
        </form>
        <br />
        <b>Senha</b>
        <br />
        <form>
          <input type="text" name="name" textAlign={"center"} />
        </form>
        <br />
      </div>
      <footer>
        <div>
          <h3>
            &emsp; Dúvidas? Contate-nos: &emsp;{" "}
            <span style={{ textAlign: "rigth" }}>
              {" "}
              <FaMailBulk /> xxxxx.xxxxx@ufu.br &emsp; <FaWhatsapp /> (34)
              9xxxx-xxxx{" "}
            </span>
          </h3>
        </div>
      </footer>
    </div>
  );
}
