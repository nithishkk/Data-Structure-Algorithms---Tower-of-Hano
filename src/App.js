
import React, { useState, useEffect } from "react";

function TowerOfHanoi() {
  const [moves, setMoves] = useState([]);

  function towerOfHanoi(n, source, destination, auxiliary) {
    if (n === 1) {
      setMoves(prevMoves => [...prevMoves, `Move disk 1 from ${source} to ${destination}`]);
      return;
    }
    towerOfHanoi(n - 1, source, auxiliary, destination);
    setMoves(prevMoves => [...prevMoves, `Move disk ${n} from ${source} to ${destination}`]);
    towerOfHanoi(n - 1, auxiliary, destination, source);
  }

  useEffect(() => {
    const files = [1, 2, 3, 4, 5]; // represent files as disks
    const source = 'computer';
    const destination = 'backup location';
    const auxiliary = 'external hard drive';

    towerOfHanoi(files.length, source, destination, auxiliary);
  }, []);

  return (
    <div>
      {moves.map((move, index) => (
        <p key={index}>{move}</p>
      ))}
    </div>
  );
}

export default TowerOfHanoi;

