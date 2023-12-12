const Stats = ({ stats }) => {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} title={"words"} />
      <Stat number={stats.numberOfCharacters} title={"characters"} />
      <Stat number={stats.ins} title={"Instegram"} />
      <Stat number={stats.face} title={"Facebook"} />
    </section>
  );
};

const Stat = ({ number, title }) => {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{title}</h2>
    </section>
  );
};

export default Stats;
