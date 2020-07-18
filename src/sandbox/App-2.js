import React, { useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
        document.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  function handleMouseMove(e) {
    setMousePosition({ x: e.pageX, y: e.pageY });
  }

  return (
    <div>
      <p>
        X: {mousePosition.x}, Y: {mousePosition.y}
      </p>
    </div>
  );
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);

function NewPage() {
    return <div>new Paage</div>
}

setTimeout(() => ReactDOM.render(<NewPage />, rootNode), 2000)
