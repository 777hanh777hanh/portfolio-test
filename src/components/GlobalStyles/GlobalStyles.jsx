import PropTypes from 'prop-types';
import './GlobalStyles.scss';

const GlobalStyle = ({ children }) => {
    return children;
};

GlobalStyle.propTypes = {
    children: PropTypes.node,
};

export default GlobalStyle;
