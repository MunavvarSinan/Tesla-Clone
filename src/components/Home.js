import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <div>
      <Container>
        <Section
          title="Model S"
          discription="Order Online for Touchless Delivery"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model Y"
          discription="Order Online for Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model 3"
          discription="Order Online for Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model X"
          discription="Order Online for Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Lowest Cost Solar Panels in America"
          discription="Money-back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />
        <Section
          title="Solar for New Roofs"
          discription="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />
        <Section
          title="Accessories"
          discription="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backgroundImg="accessories.jpg"
          leftBtnText="Shop Now"
        />
      </Container>
    </div>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  scroll-snap-points-y: repeat(300px);
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;
