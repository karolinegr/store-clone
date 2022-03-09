import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <span
        style={{
          fontWeight: "700",
          fontSize: "20px",
          margin: "25px 0"
        }}
      >
        404 - Página não encontrada
      </span>
      <div>
        <Link to="/">Voltar para a Página inicial</Link>
      </div>
    </div>
  );
};

export default NotFound;
