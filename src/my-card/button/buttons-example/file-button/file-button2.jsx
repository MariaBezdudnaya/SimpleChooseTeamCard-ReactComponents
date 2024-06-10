import classNames from 'classnames';
import { useState } from 'react';
import './file-button.css';

export const FileButton2 =() => {
  const [active, setActive] = useState(false);
  
  return <button 
  onClick={() => setActive(!active)}
  className={classNames("file-button", "file-button2", {aqua: active})}>FileButton2</button>
}