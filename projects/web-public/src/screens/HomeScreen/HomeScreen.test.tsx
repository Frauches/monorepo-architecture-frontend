import { customRender } from "@frauches/test-commons/react-testing-library";
import HomeScreen from "./HomeScreen";

const render = customRender(({ children }) => {
  // Here goes our project provider
  return <section>{children}</section>;
});

describe("HomeScreen", () => {
  it("Should render the page", () => {
    const container = render(<HomeScreen />);

    expect(container).toMatchSnapshot();
  });
});
