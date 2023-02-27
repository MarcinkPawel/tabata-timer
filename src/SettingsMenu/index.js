import "../SettingsMenu/style.css";

export const SettingsMenu = () => {
  return (
    <div>
      <section className="section">
        <label htmlFor="getReady">
          <p>Get Ready</p>
          <input type="text" />
        </label>
        <label htmlFor="Work">
          <p>Workout</p>
          <input type="text" />
        </label>
        <label htmlFor="Rest">
          <p>Rest</p>
          <input type="text" />
        </label>
        <label htmlFor="Sets">
          <p>Sets</p>
          <input type="text" />
        </label>
        <label htmlFor="Total">
          <p>Total</p>
          <span>Time</span>
        </label>
      </section>
    </div>
  );
};
