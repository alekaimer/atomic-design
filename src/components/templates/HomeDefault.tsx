import { Header } from "../molecules/Header";
import { List } from "../organisms/List";

interface ListProps {
  listChildren: React.ReactNode
}

export const HomeDefault = ({ listChildren }: ListProps) => {
  return (
    <div>
      <Header />
      <List>
        {listChildren}
      </List>
    </div>
  );
};
