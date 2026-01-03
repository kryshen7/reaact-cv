function ThemeToggle({ dark, setDark }) {
    return (
        <button className="theme-btn" onClick={() => setDark(!dark)}>
            {dark ? "🌙 Dark" : "☀️ Light"}
        </button>
    );
}

export default ThemeToggle;
