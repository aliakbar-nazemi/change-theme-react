import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme((prevState) => !prevState);
  };

  return (
    <section
      className="w-full min-h-[100vh] p-[10px]"
      id={!theme ? "light" : "dark"}
    >
      <button
        onClick={changeTheme}
        className={
          !theme
            ? "light-btn bg-slate-300 p-[10px] shadow-2xl rounded-lg"
            : "dark-btn bg-slate-700 p-[10px] shadow-2xl rounded-lg"
        }
      >
        change theme
      </button>
    </section>
  );
}

export default App;
