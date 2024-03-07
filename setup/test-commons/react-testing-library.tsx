import { render as rtlRender } from "@testing-library/react";

function DefaultWrapper({ children }) {
  return children;
}

export const customRender = (AllTheProviders = DefaultWrapper) => {
  return (ui: React.ReactElement, options = {}) => {
    return rtlRender(ui, { wrapper: AllTheProviders, ...options });
  };
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
