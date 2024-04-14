export const GoodFormatting = () => (
  <form>
    <fieldset>
      <legend>Good Formatting</legend>
      <p>
        <label for="first_name">First Name</label>
        <input
          name="first_name"
          id="first_name"
          type="text"
          placeholder="John"
        />
      </p>
      <p>
        <label for="last_name">Last Name</label>
        <input
          name="last_name"
          id="last_name"
          type="text"
          placeholder="Smith"
        />
      </p>
      <p>
        <label for="address_1">Address 1</label>
        <input
          name="address_1"
          id="address_1"
          type="text"
          placeholder="123 Main Street"
        />
      </p>
      <p>
        <label for="address_2">Address 2</label>
        <input name="address_2" id="address_2" type="text" placeholder="" />
      </p>
      <p>
        <label for="city">City</label>
        <input name="city" id="city" type="text" placeholder="Seattle" />
      </p>
      <p>
        <label for="state">State</label>

        <select name="state" id="state" placeholder="state">
          <option value="WA">WA</option>
          <option value="TX">TX</option>
          <option value="Where else would you live?">
            Where else would you live?
          </option>
        </select>
      </p>
      <p>
        <label for="zip">Zip</label>
        <input name="zip" id="zip" type="text" placeholder="12345" />
      </p>
    </fieldset>
  </form>
);
