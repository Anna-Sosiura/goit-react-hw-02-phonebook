import { Component } from 'react';
export class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ contacts: [], name: '', number: '' });
  };

  hendleChange = e => {
    const { value, name } = e.currentTarget;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            value={this.state.name}
            onChange={this.hendleChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            required
            value={this.state.number}
            onChange={this.hendleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
