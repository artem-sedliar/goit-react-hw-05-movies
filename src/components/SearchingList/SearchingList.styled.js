import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const List = styled.ul`
  padding-left: 18px;
  margin-top: 3px;
  margin-bottom: 13px;
`;
export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const LinkStyled = styled(Link)`
  color: #2196f3;
  font-weight: 500;
  :hover,
  :focus {
    color: red;
  }
`;
