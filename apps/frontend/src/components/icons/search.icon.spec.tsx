import { render } from '@testing-library/react';

import { SearchIcon } from './search.icon';

describe('search icon', () => {
  it('should render search icon correctly', () => {
    const { container } = render(<SearchIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
