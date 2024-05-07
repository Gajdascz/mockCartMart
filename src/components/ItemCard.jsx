import styled from "styled-components";

const Card = styled.div``;

export default function ItemCard({ item }) {
  return (
    <Card>
      <h2>{item.title}</h2>
      <img src={item.image} />
      <p>{item.price}</p>
      <p>{item.category}</p>
      <p>{item.description}</p>
      <button>Add To Cart</button>
      <input type="number" />
    </Card>
  );
}
