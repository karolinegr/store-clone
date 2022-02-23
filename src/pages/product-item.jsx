import { useParams, useNavigate } from "react-router-dom";

const ProductItem = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };

  const handleHomeButton = () => {
    navigate("/");
  };

  return (
    <div>
      Produto {params.slug?.toUpperCase()} ({params.slug?.length})
      <hr />
      <button onClick={handleBackButton}>Voltar</button>
      <button onClick={handleHomeButton}>Home</button>
    </div>
  );
};

export default ProductItem;
