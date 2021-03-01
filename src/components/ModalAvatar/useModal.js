import { useState } from 'react';

const useModal = () => {
  const [isShowing1, setIsShowing] = useState(false);

  function toggle1() {
    setIsShowing(!isShowing1);
  }

  return {
    isShowing1,
    toggle1,
  }
};

export default useModal;