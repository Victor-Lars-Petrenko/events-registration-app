import { useState } from "react";
import { inputItems, radioItems } from "../../assets/items/registerItems";

const Registration = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  return (
    <main>
      <hi>Event registration</hi>
      <form>
        <ul>
          {inputItems.map(({ name, label }) => (
            <li key="name">
              <label htmlFor={name}>{label}</label>
              <input name={name} id={name} type="text"></input>
            </li>
          ))}
        </ul>
        <ul>
          {radioItems.map(({ id, label }) => (
            <li key={id}>
              <label>
                <input
                  type="radio"
                  name="radioGroup"
                  value={label}
                  checked={selectedOption === label}
                  onChange={handleOptionChange}
                />
                {label}
              </label>
            </li>
          ))}
        </ul>
        <button type="submit">Register</button>
      </form>
    </main>
  );
};

export default Registration;
