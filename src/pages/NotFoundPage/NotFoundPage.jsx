import { LinkStyled, NotFound } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <NotFound>
      Sorry, page not found! Go to the page{' '}
      <LinkStyled to="/"> Home</LinkStyled>
    </NotFound>
  );
};

export default NotFoundPage;