import { render } from '@testing-library/react';

import { TwitterIcon } from './twitter.icon';

describe('twitter icon', () => {
  it('should render twitter icon correctly', () => {
    const { container } = render(<TwitterIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should accept and use height', () => {
    const { container } = render(<TwitterIcon width={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should accept and use width', () => {
    const { container } = render(<TwitterIcon height={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
