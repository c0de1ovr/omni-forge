import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Navbar } from '.';

jest.mock('@nextui-org/navbar', () => ({
  ...jest.requireActual('@nextui-org/navbar'),
  NavbarContent: jest.fn(({ children }) => (
    <div data-testid="NavbarContent">{children}</div>
  )),
  NavbarMenu: jest.fn(({ children }) => (
    <div data-testid="NavbarMenu">{children}</div>
  )),
  NavbarMenuToggle: jest.fn(({ children }) => (
    <div data-testid="NavbarMenuToggle">{children}</div>
  )),
  NavbarBrand: jest.fn(({ children }) => (
    <div data-testid="NavbarBrand">{children}</div>
  )),
  NavbarItem: jest.fn(({ children }) => <div id="NavbarItem">{children}</div>),
  NavbarMenuItem: jest.fn(({ children }) => (
    <div data-testid="NavbarMenuItem">{children}</div>
  )),
}));

describe('navbar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('NavbarContent should match snapshot', () => {
    const { queryAllByTestId } = render(<Navbar />);

    const [brandSection, quickActionIcons] = queryAllByTestId('NavbarContent');

    expect(brandSection).toMatchSnapshot();
    expect(quickActionIcons).toMatchSnapshot();
  });

  it('NavbarMenu should match snapshot', () => {
    const { getByTestId } = render(<Navbar />);

    expect(getByTestId('NavbarMenu')).toMatchSnapshot();
  });
});
