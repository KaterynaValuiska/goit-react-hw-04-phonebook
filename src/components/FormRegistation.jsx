import PropTypes from 'prop-types';
import { useState } from 'react';

export default function FormRegistation({ createUser }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        alert('name or number entered incorrectly');
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    createUser({
      name: name,
      number: number,
    });
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name{' '}
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            aria-describedby="emailHelp"
            className="form-control"
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Number{' '}
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            aria-describedby="emailHelp"
            className="form-control"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Add contact
      </button>
    </form>
  );
}

FormRegistation.propTypes = {
  createUser: PropTypes.func.isRequired,
};
