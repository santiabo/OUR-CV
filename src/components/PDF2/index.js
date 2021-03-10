import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { Nav } from './styled';

export default function PrinterWrapper({ children }) {

  const print = useSelector((state) => state.print.printing)

  let initialRender = useRef(true)
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      handlePrint()
    }
  }, [print]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const componentRef = useRef();
  return (
    <>
      <Nav>
        <ReactToPrint content={() => componentRef.current} />
        <div ref={componentRef}>
          {children}
        </div>
      </Nav>
    </>
  )
};
