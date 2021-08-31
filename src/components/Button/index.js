import "./index.css";
import PropTypes, { oneOf } from 'prop-types';

export const Button = ({ href, children, variant, ...rest }) => {
    return (
        <a href={href} className={`button ${variant}`} {...rest}>
            {children}
        </a>
    )
};

Button.propTypes = {
    href: PropTypes.string,
    variant: oneOf(['primary', 'secondary', 'tertiary', 'danger', 'success']),
    // user: shape({
    //     firstname: PropTypes.string.isRequired,
    //     lastname: PropTypes.string.isRequired,
    //     age: PropTypes.number.isRequired,
    //     hasBachelorDegree: PropTypes.bool.isRequired
    // }).isRequired
};

Button.defaultProps = {
    children: '',
    variant: 'primary',
    href: ''
}