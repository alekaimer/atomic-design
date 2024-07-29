import { Text } from "../atoms/Text";

interface HeaderProps {
  theme?: "full" | "single";
}

export const Header = ({ theme = "full" }: HeaderProps) => {
  if (theme === "single") {
    return (
      <header>
        <Text type="h2">Header Single</Text>
      </header>
    );
  }

  return (
    <header>
      <Text type="h2">Header Full</Text>
    </header>
  );
};
