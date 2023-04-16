import {
  StyledList,
  StyledInput,
  StyledLabel,
  StyledHeading,
} from "./styled.js";
import themes from "../themes.js";

const ThemeChoice = ({ theme, setTheme }) => (
  <>
    <StyledHeading>Choose theme:</StyledHeading>
    <form>
      <StyledList>
        {themes.map((listItem) => (
          <li key={listItem.id}>
            <div>
              <StyledLabel
                backgroundColor={listItem.backgroundColor}
                color={listItem.buttonColor}
              >
                <StyledInput
                  type="radio"
                  name="theme"
                  value={JSON.stringify(listItem)}
                  checked={listItem.id === theme.id}
                  onChange={(event) => {
                    setTheme(JSON.parse(event.target.value));
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
