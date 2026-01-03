function Hobbies({ hobbies }) {
    return (
        <section>
            <h2>🎯 Hobiler</h2>
            <p>{hobbies.join(", ")}</p>
        </section>
    );
}

export default Hobbies;
