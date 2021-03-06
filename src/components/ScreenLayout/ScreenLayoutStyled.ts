import styled from 'styled-components';
import { Typography, IconButton, Grid } from '@material-ui/core';

export const RootContainer = styled.div`
  flex-grow: 1;
`;

export const HeaderTitle = styled(Typography)`
  flex-grow: 1;
`;

export const MenuButton = styled(IconButton)`
  && {
    margin-left: -12px;
    margin-right: 4px;
  }
`;

export const GridContent = styled(Grid)`
  && {
    padding: 16px;
  }
`;
