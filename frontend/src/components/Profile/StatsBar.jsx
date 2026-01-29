const stats = [
    { label: "Movies", value: 247 },
    { label: "Watch Time", value: "486h" },
    { label: "Friends", value: "1.2k" },
    { label: "Trophies", value: 18 },
  ];
  
  export default function StatsBar() {
    return (
      <div className="stats">
        {stats.map((stat) => (
          <div key={stat.label} className="stat">
            <p>{stat.value}</p>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    );
  }
  