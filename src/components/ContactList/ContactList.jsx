import { Button, Item, List } from './ContactList.styled';

export const Contaclist = ({ listAbonents }) => {
  return (
    <List>
      {listAbonents.map(abonent => (
        <Item key={abonent.id}>
          {abonent.name}: {abonent.number}
          <Button>Delete</Button>
        </Item>
      ))}
    </List>
  );
};
