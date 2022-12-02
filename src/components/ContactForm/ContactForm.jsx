import { Formik } from 'formik';
import { FormWr, Input, Label, Button } from './ContactForm.styled';
export const ContactForm = () => {
  return (
    <Formik>
      <FormWr>
        <Label>
          Name
          <Input required name="name" type="text" placeholder="Enter name" />
        </Label>
        <Label>
          Number
          <Input
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
};
