import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({quote}) => {
  
  const pRef = useRef()
  const [boxZise, setBoxZise] = useState({ width: 0 , height: 0 })
  
  useLayoutEffect(() => {
  const { width, height } = pRef.current.getBoundingClientRect()
  setBoxZise({width, height})
  }, [quote])

  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{display: 'flex'}}
      >
        <p ref={pRef} className="mb-2">{quote}</p>
        <footer className="blockquote-footer">JonHdez</footer>
      </blockquote>

      <code>{JSON.stringify(boxZise)}</code>
    </>
  );
};
