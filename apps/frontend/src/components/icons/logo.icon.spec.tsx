import { render } from '@testing-library/react';

import { Logo } from './logo.icon';

describe('logo icon', () => {
  it('should render logo icon correctly', () => {
    const { container } = render(<Logo />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should accept and use height', () => {
    const { container } = render(<Logo width={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should accept and use width', () => {
    const { container } = render(<Logo height={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
