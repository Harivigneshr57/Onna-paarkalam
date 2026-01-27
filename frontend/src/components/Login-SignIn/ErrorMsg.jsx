export default function Msg({ title, error, show, style }) {
    if(style){
        return (
            <div id="Msg" className={show ? "show" : ""}>
              <h1 id="title">{title}</h1>
              <p id="err">{error}</p>
            </div>
          );
    }
    return (
      <div id="msg" className={show ? "show" : ""}>
        <h1 id="title">{title}</h1>
        <p id="err">{error}</p>
      </div>
    );
  }
  