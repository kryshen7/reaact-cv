function Skills({ skills }) {
    return (
        <section>
            <h2>🚀 Yetenekler</h2>
            <div className="skills">
                {skills.map((skill, index) => (
                    <span key={index}>{skill}</span>
                ))}
            </div>
        </section>
    );
}

export default Skills;
