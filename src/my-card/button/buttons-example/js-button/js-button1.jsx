//JS-объекты
import { useState } from 'react';
import { JsStyles } from './js-styles';

export const JsButton1 =() => {
  const [active, setActive] = useState(false);
  
  const JsButtonStyles1 = {
    ...JsStyles,
  
    color: active ? "#D6Ed17" : "#606060",
    backgroundColor: active ? "#606060" : "#D6Ed17",
  }
  return <button 
  onClick={() => setActive(!active)}
  style={ JsButtonStyles1 }
  >JS-Button1</button>
}