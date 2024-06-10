// CSS-модули:
import classNames from 'classnames';
import { useState } from 'react';
import './file-button.css';

export const FileButton1 =() => {
  const [active, setActive] = useState(false);
  
  return <button 
  onClick={() => setActive(!active)}
  className={classNames("file-button", "file-button1", {pink: active})}>FileButton1</button>
}


//Комбинированный подход
// import { useState } from 'react';
// import './file-button.css';

// export const FileButton1 =() => {
//   const [active, setActive] = useState(false);
  
//   const styleObject = {
//     color: active ? "#D6Ed17" : "#606060",
//     backgroundColor: active ? "#606060" : "#D6Ed17",
//   }
//   return <button 
//   onClick={() => setActive(!active)}
//   className="file-button"
//   style={styleObject}
//   >FileButton1</button>
// }