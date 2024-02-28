import { render } from '@testing-library/react';

import { MoonFilledIcon } from './moon-filled.icon';

describe('moon filled icon', () => {
  it('should render moon filled icon correctly', () => {
    const { container } = render(<MoonFilledIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should accept and use height', () => {
    const { container } = render(<MoonFilledIcon width={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should accept and use width', () => {
    const { container } = render(<MoonFilledIcon height={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
