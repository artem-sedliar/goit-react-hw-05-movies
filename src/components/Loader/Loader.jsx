import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Grid } from 'react-loader-spinner';

import { LoaderWrap } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrap>
      <Grid color="#2196f3" height={60} width={60} />
    </LoaderWrap>
  );
};

export default Loader;