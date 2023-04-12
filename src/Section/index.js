import {StyledSection} from "./styled.js";

const Section = (props) => (
    <StyledSection>
        {props.children}
    </StyledSection>
);

export default Section;