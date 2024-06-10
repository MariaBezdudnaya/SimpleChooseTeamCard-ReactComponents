import { useState } from 'react';
import { JsStyles } from './js-styles';

export const JsButton2 =() => {
  const [active, setActive] = useState(false);

  const JsButtonStyles2 = {
    ...JsStyles,
  
    color: active ? "#FEE715" : "#101820",
    backgroundColor: active ? "#101820" : "#FEE715",
  }
  
  return <button 
  onClick={() => setActive(!active)}
  style={ JsButtonStyles2 }
  >JS-Button2</button>
}