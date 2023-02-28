import { useEffect, useState } from "react";
import "../SettingsMenu/style.css";
import ReactInputMask from "react-input-mask";

export const SettingsMenu = () => {
  const [warmUp, setWarmUp] = useState(20);
  const [work, setWork] = useState(10);
  const [rest, setRest] = useState(20);
  const [sets, setSets] = useState(8);
  const [total, setTotal] = useState(null);

  function calculateSets(power, still, times) {
    const totalTime = ((parseInt(power) + parseInt(still)) * parseInt(times));
    setTotal(totalTime);
    console.log(totalTime);
  }

  useEffect(() => {
    calculateSets(work, rest, sets);
  }, [work, rest, sets]);




  return (
    <div>
      <section className="section__buttons">
        <button className="button">Start</button>
        <button className="button">Reset</button>
      </section>
      <section className="section">
        <label className="Label" htmlFor="warmUp">
          <p className="text">Warm Up</p>
          <input
            type="number"
            className="input"
            step="1"
            min="0"
            value={warmUp}
            onChange={(e) => setWarmUp(e.target.value)}
          />
        </label>
        <label className="Label" htmlFor="Work">
          <p>Work</p>
          <input
            type="number"
            className="input"
            step="1"
            min="0"
            value={work}
            onChange={(e) => setWork(e.target.value)}
          />
        </label>
        <label className="Label" htmlFor="Rest">
          <p>Rest</p>
          <input
            type="number"
            className="input"
            step="1"
            min="0"
            value={rest}
            onChange={(e) => setRest(e.target.value)}
          />
        </label>
        <label className="Label" htmlFor="Sets">
          <p>Sets</p>
          <input
            type="number"
            className="input"
            min="0"
            step="1"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
          />
        </label>
        <label className="Label" htmlFor="Total">
          <p>Total</p>
          <span>{total}</span>
        </label>
      </section>
    </div>
  );
};
