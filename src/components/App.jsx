import { useState } from 'react';
import { nanoid } from 'nanoid';
import FormRegistation from './FormRegistation';
import { Contacts } from './Contacts';
import { Filter } from './Filter';
import useLocalStorage from './Hooks/useLocalStorage';

export default function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const createUser = data => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    const newUser = { ...data, id: nanoid(10) };

    setContacts(prevState => {
      return [newUser, ...prevState];
    });
  };

  const handleFilterChange = evt => setFilter(evt.currentTarget.value);

  const getFilterContact = () => {
    const normalized = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  };
  const onDeleteContact = id =>
    setContacts(prevState => prevState.filter(contact => contact.id !== id));

  return (
    <div
      style={{
        padding: 30,
      }}
    >
      <h1>Phonebook</h1>
      <FormRegistation createUser={createUser} />
      <Filter value={filter} onChange={handleFilterChange} />
      <Contacts
        contacts={getFilterContact()}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}
