import {
  StyledList,
  StyledInput,
  StyledLabel,
  StyledHeading,
} from "./styled.js";
import themes from "../themes.js";

const ThemeChoice = (props) => (
  <>
    <StyledHeading>Choose theme:</StyledHeading>
    <form>
      <StyledList>
        {themes.map((listItem) => (
          <li key={listItem.id}>
            <div>
              <StyledLabel>
                <StyledInput
                  type="radio"
                  name="theme"
                  value={JSON.stringify(listItem)}
                  checked={listItem.id === props.theme.id}
                  onChange={(event) => {
                    props.setTheme(JSON.parse(event.target.value));
                  }}
                />
                {listItem.name}
              </StyledLabel>
            </div>
          </li>
        ))}
      </StyledList>
    </form>
  </>
);

export default ThemeChoice;
