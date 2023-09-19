import { Form, Input } from "./Searchbar.styled";

export const Searchbar = ({ search, onChange }) => {
  const handleInputChange = evt => {
    const newValue = evt.target.value;
    onChange(newValue, 'search');
  };

  return (
    <Form>
      <Input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleInputChange}
      />
    </Form>
  );
};