export const BadFormatting = () => {
  return (
    <form>
      <fieldset>
        <legend>Bad Formatting</legend>
        <p>
          <input type="text" placeholder="First Name" />
        </p>
        <p>
          <input type="text" placeholder="Last Name" />
        </p>
        <p>
          <input type="text" placeholder="Address 1" />
        </p>
        <p>
          <input type="text" placeholder="City" />
        </p>
        <p>
          <select placeholder="state">
            <option value="WA">WA</option>
            <option value="TX">TX</option>
            <option value="Where else would you live?">
              Where else would you live?
            </option>
          </select>
        </p>
        <p>
          <input type="text" placeholder="Zip" />
        </p>
      </fieldset>
    </form>
  );
};
