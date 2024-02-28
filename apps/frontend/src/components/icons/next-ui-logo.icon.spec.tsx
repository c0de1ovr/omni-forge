import { render } from '@testing-library/react';

import { NextUILogo } from './next-ui-logo.icon';

describe('next-ui logo icon', () => {
  it('should render next-ui logo icon correctly', () => {
    const { container } = render(<NextUILogo />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
