import { Button, Item, List } from './ContactList.styled';

export const Contaclist = ({ listAbonents }) => {
  return (
    <List>
      {listAbonents.map(people => (
        <Item key={people.id}>
          {people.name}: {people.number}
          <Button>Delete</Button>
        </Item>
      ))}
    </List>
  );
};
