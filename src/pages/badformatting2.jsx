import React from "react";

export const BadFormatting2 = () => {
  const [formData, setFormData] = React.useState({
    initial: true,
    first: "Apple",
    last: "Baker",
    address1: "1416 Sid Snyder Ave",
    city: "Seattle",
    state: "WA",
    zip: "90210",
  });

  const resetFormData = (e) => {
    e.preventDefault();
    setFormData({
      initial: false,
      first: "",
      last: "",
      address1: "",
      city: "",
      state: "",
      zip: "",
    });
  };

  const changeEvent = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  return (
    <form>
      <fieldset>
        <legend>
          {formData.initial
            ? "Bad Formatting"
            : "Password Reset Verification Data"}
        </legend>
        <p>
          <input
            type="text"
            value={formData.first}
            onChange={changeEvent("first")}
            placeholder="Favorite Food"
          />
        </p>
        <p>
          <input
            type="text"
            value={formData.last}
            onChange={changeEvent("last")}
            placeholder="Father's Occupation"
          />
        </p>
        <p>
          <input
            type="text"
            value={formData.address1}
            onChange={changeEvent("address1")}
            placeholder="Street you grew up on"
          />
        </p>
        <p>
          <input
            type="text"
            value={formData.city}
            onChange={changeEvent("city")}
            placeholder="Favorite vacation spot"
          />
        </p>
        <p>
          <select
            value={formData.state}
            onChange={changeEvent("state")}
            placeholder="state"
          >
            <option value="WA">WA</option>
            <option value="TX">TX</option>
            <option value="">State you were married?</option>
          </select>
        </p>
        <p>
          <input
            type="text"
            placeholder="Favorite TV Show"
            value={formData.zip}
            onChange={changeEvent("zip")}
          />
        </p>
        <p>
          <button onClick={resetFormData}>Reset Form</button>
        </p>
      </fieldset>
    </form>
  );
};
