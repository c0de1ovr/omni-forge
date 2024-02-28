import { render } from '@testing-library/react';

import { DiscordIcon } from './discord.icon';

describe('discord icon', () => {
  it('should render discord icon correctly', () => {
    const { container } = render(<DiscordIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should accept and use height', () => {
    const { container } = render(<DiscordIcon width={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should accept and use width', () => {
    const { container } = render(<DiscordIcon height={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
