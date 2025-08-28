import { CircleLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderBackdrop}>
      <CircleLoader color="#599b2b" />
    </div>
  );
};

export default Loader;
