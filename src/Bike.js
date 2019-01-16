import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

const BikeCard = (props) => {
  const {name, empty_slots, free_bikes} = props.bike;
  return (
  <Card>
    <Card.Content header={name} />
    <Card.Content description={`Free Bikes: ${free_bikes}`} />
    <Card.Content description={`Empty Slots: ${empty_slots}`} />
  </Card>
  )
}

export default BikeCard;