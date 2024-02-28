// map reducer functions to mocked action for testing purpose
export const mapReducersToMockedActions = (
  reducers: Record<string, Function>,
) => {
  const mockedActions: Record<string, string> = {};
  for (const name of Object.keys(reducers)) {
    mockedActions[name] = `mocked-${name}-action`;
  }
  return mockedActions;
};
