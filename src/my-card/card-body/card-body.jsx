import classNames from 'classnames';
import { useState } from 'react';
import { Data } from "../../data/data";
import { CardTitle } from "../card-title/card-title";
import { CardSubtitle } from "../card-subtitle/card-subtitle";
import { CardText } from "../card-text/card-text";
import { Button } from '../button/button';
import './card-body.css'

export const CardBody = () => {
  const [active, setActive] = useState(false);

  const handleButtonClick = () => {
    setActive(!active);
  };

  return (
  <div className={classNames("card-body", "card-body1", {light: active})}> 
    <img src={Data.image} style={{width: "100%"}} alt={Data.title}></img> 
    <CardTitle />
    <CardSubtitle />
    <CardText />
    <Button onClick={handleButtonClick} active={active} />
  </div>
  )
}