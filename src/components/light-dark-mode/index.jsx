import "./style.css";
import useThemeStorage from "./useLocalStorage";

function LightDarkMode() {
    const [theme, setTheme] = useThemeStorage("theme", "light");

    function handleThemeChange(){
        setTheme(theme === "light" ? "dark" : "light");
    }
    console.log(theme)
  return (
    <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
            <p>Hello Paulus.</p>
            <p>You are busy working on light and dark mode</p>
            <button onClick={handleThemeChange}>
                {
                    theme === "light" ? "Change to dark mode" : "Change to light mode"
                }
            </button>
        </div>
    </div>
  );
}

export default LightDarkMode;
