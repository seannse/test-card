import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles.styled';
import { theme } from 'styles/theme';

import { Section } from './App.styled';
import { UserList } from './UserList/UserList';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Section>
        <UserList />
      </Section>
    </ThemeProvider>
  );
};
