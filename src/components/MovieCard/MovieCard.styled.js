import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  padding-top: 82px;
`;
export const Btn = styled.button`
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 11px;
  border-radius: 5px;
  padding: 5px 13px;
  border: 1px solid #d1cccc;
  background-color: #fff;
  :hover,
  :focus {
    color: red;
    box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
      1px 4px 6px rgb(0 0 0 / 16%);
  }
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 11px;
  padding-bottom: 11px;
  border-bottom: 1px solid #94959b;
  margin-bottom: 22px;
`;
export const Img = styled.img`
  width: 292px;
  border-radius: 5px;
`;
export const Description = styled.div`
  padding: 22px 0;
`;
export const MovieTitle = styled.h2`
  font-size: 33px;
  line-height: 1.33;
  margin-bottom: 13px;
`;
export const Title = styled.h3`
  font-size: 21px;
  line-height: 1.21;
  margin: 11px 0;
`;
export const Text = styled.p`
  font-size: 16px;
`;

export const Add = styled.p`
  font-size: 18px;
  font-weight: 700;
`;
export const List = styled.ul`
  display: flex;
  padding-left: 18px;
  margin: 13px auto;
`;
export const Item = styled.li`
  :not(:last-child) {
    margin-right: 22px;
  }
`;

export const LinkStyled = styled(NavLink)`
  color: #2196f3;
  font-weight: 500;
  :hover,
  :focus {
    color: red;
  }
  .active {
    color: red;
  }
`;
