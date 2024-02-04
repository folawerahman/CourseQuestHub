import React, { useState } from "react";

export const DynamicButton = ({ style, value }) => {
//   const [ButtonState, setButtonState] = useState(style);

//   const newBackground = () => {
//     if (ButtonState === style) {
//       setButtonState(changeBgColor);
//     } else {
//         setButtonState(style);
//     }
//   };

// const changeBgColor = {
//     background: '#023',
//     display: 'none'
// }

  return (
    <div>
      <button style={style}>
        {value}
      </button>
    </div>
  );
};
