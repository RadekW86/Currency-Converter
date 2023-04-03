import "./style.css";

const Section = (props) => (
    <section className="section">
        {props.children}
    </section>
);

export default Section;