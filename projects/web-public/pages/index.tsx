import { sum } from "@frauches/utils/math";

export default function HomeScreen() {
  return (
    <main>
      <h1> Home </h1>

      <p>
        It has to sum numbers using the function from utils package workspace{" "}
        {sum(5, 3)}
      </p>
    </main>
  );
}
