import { render } from '@testing-library/react';

import { HeartFilledIcon } from './heart-filled.icon';

describe('heart filled icon', () => {
  it('should render heart icon correctly', () => {
    const { container } = render(<HeartFilledIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should accept and use height', () => {
    const { container } = render(<HeartFilledIcon width={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should accept and use width', () => {
    const { container } = render(<HeartFilledIcon height={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
