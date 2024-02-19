import { render } from '@testing-library/react';

import { GithubIcon } from './github.icon';

describe('github icon', () => {
  it('should render github icon correctly', () => {
    const { container } = render(<GithubIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should accept and use height', () => {
    const { container } = render(<GithubIcon width={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should accept and use width', () => {
    const { container } = render(<GithubIcon height={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
