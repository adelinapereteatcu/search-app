import styled from "@emotion/styled";

type Props = {
  listItems: string[];
  input: string;
};

const ListWrapper = styled("div")`
  max-width: 320px;
`;

const StyledListItem = styled("li")`
  text-align: left;
  font-size: 16px;
  margin: 4px;
`;

const StyledList = styled("ul")`
  padding: 10px;
`;

export const List = (props: Props) => {
  const filteredListItems = props.listItems.filter((item) => {
    if (props.input === "") {
      return item;
    } else {
      return item.toLowerCase().includes(props.input);
    }
  });
  return (
    <ListWrapper>
      <StyledList>
        {filteredListItems.map((el, index) => {
          return <StyledListItem key={index}>{el}</StyledListItem>;
        })}
      </StyledList>
    </ListWrapper>
  );
};
