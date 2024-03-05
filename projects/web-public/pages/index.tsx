import Text from "@frauches/design-system/components/Text";
import { sum } from "@frauches/utils/math";

export default function HomeScreen() {
  return (
    <main>
      <Text tag="h1"> Home </Text>

      <Text tag="p">
        It has to sum numbers using the function from utils package workspace{" "}
        {sum(5, 3)}
      </Text>
    </main>
  );
}
