import { Button, Item, List } from './ContactList.styled';

export const Contaclist = ({ listAbonents, onDeleteClick }) => {
  return (
    <List>
      {listAbonents.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <Button onClick={() => onDeleteClick(id)}>Delete</Button>
        </Item>
      ))}
    </List>
  );
};
