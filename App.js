// import "./app.css";
import { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router";
import { ThemeContext } from "./contexts/ThemeContext";
function App() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      <Header />
      <Outlet />
    </ThemeContext.Provider>
  );
}
export default App;
