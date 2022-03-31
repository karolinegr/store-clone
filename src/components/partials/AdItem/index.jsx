import { Item, LinkTitle, ItemImg } from "./style";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const AdItem = (props) => {
  const precoLocal = () => {
    const valor = props.data.price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
    return valor;
  };

  return (
    <Item>
      <LinkTitle to={`/ad/${props.data.id}`}>
        <ItemImg variant="top" src={props.data.image} />
        <Item.Body>
          <Item.Title>{props.data.title}</Item.Title>
          <Item.Text>
            {props.data.priceNegotiable ? "Preço negociável" : precoLocal()}
          </Item.Text>
        </Item.Body>
      </LinkTitle>
    </Item>
  );
};

export default AdItem;
