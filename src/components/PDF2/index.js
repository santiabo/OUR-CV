import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { Nav } from './styled'

export default function PrinterWrapper({ children }) {
  const linkToPrint = () => {
    return (
      <button>Save / Print </button>
    )
  }
  const componentRef = useRef();
  return (
    <>
      <Nav>
        <ReactToPrint trigger={linkToPrint} content={() => componentRef.current} />
        <div ref={componentRef}>
          {children}
        </div>
      </Nav>
    </>
  );
}
