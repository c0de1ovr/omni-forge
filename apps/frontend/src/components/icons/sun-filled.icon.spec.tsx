import { render } from '@testing-library/react';

import { SunFilledIcon } from './sun-filled.icon';

describe('sun filled icon', () => {
  it('should render sun filled icon correctly', () => {
    const { container } = render(<SunFilledIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should accept and use height', () => {
    const { container } = render(<SunFilledIcon width={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should accept and use width', () => {
    const { container } = render(<SunFilledIcon height={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
