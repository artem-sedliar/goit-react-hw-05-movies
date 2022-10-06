import { LinkStyled, NotFound } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <NotFound>
      Sorry, page not found! Go to page{' '}
      <LinkStyled to="/"> Home</LinkStyled>
    </NotFound>
  );
};

export default NotFoundPage;
