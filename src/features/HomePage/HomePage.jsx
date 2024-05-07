import styled from "styled-components";
import happyCustomer from "./assets/happy-customer.jpg";
import { Link } from "react-router-dom";
import Section from "../../components/Section";

const PageContainer = styled.main`
  /* background-color: ${({ theme }) => theme.colors.surface[9]}; */
`;

export default function HomePage() {
  return (
    <PageContainer>
      <Section
        img={{
          src: happyCustomer,
          alt: "Customer happily receiving their order.",
        }}
        text={{
          header: "Lorem",
          body: "Ipsum dolor sit amet consectetur adipisicing elit. Ipsam deleniti dolorem dolor eaque non asperiores sit expedita quasi sequi veniam!",
        }}
        action={{
          type: "link",
          text: "maxime qui",
        }}
      />
    </PageContainer>
  );
}
