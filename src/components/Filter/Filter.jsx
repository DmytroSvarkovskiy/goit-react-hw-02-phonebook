import { WrapperFiler, FilterInput, FilterP } from './Filter.styled';
export const Filter = ({ onFilterChange, value }) => {
  return (
    <WrapperFiler>
      <FilterP>Find contacts by name</FilterP>
      <FilterInput type="text" value={value} onChange={onFilterChange} />
    </WrapperFiler>
  );
};
