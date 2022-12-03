import { Component } from 'react';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { FormWr, Input, Label, Button } from './ContactForm.styled';
const id = nanoid(3);
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  onInputChange = e => {
    this.setState(prevstate => {
      prevstate[e.target.name] = [e.target.value];
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: id,
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };
    this.props.addContact(newContact);
  };
  render() {
    return (
      <Formik>
        <FormWr onSubmit={this.onSubmit}>
          <Label>
            Name
            <Input
              onChange={this.onInputChange}
              required
              name="name"
              type="text"
              placeholder="Enter name"
            />
          </Label>
          <Label>
            Number
            <Input
              onChange={this.onInputChange}
              placeholder="Enter number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </FormWr>
      </Formik>
    );
  }
}
