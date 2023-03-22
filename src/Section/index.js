import "./style.css";

const Section = (prpos) => (
    <section className="section">
        {prpos.children}
    </section>
);

export default Section;