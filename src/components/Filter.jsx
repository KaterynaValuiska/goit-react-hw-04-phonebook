import PropTypes from 'prop-types';
export const Filter = ({ value, onChange }) => (
  <div
    className="mb-3"
    style={{
      marginTop: 20,
    }}
  >
    <label htmlFor="exampleInputEmail1" className="form-label">
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        aria-describedby="emailHelp"
        className="form-control"
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
