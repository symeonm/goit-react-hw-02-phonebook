import { nanoid } from 'nanoid';
import { Component } from 'react';

export default class formAdd extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset()
    
  };

  handleChange = e => {
    const { name, value, id } = e.target;
    this.setState(prev => ({[name]: value, id: id}))
  }

  reset = () => {
    this.setState({ name: '', number: '', id: '' });
  };

  idContact = nanoid();

  render() {
    const {name, number} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.idContact}>
          Name
          <input
            id={this.idContact}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            required
          />
        </label>
        <label htmlFor={this.idContact}>
          Number
          <input
            id={this.idContact}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
