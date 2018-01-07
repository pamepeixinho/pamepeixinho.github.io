import PropTypes from 'prop-types';

/*
  react-intl message proptype is not available to import directly:
  @link https://github.com/yahoo/react-intl/blob/b82a899a59c762fcc590e1fa824b87da6ad409d9/src/types.js#L37-L41
*/
export const MessagePropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  defaultMessage: PropTypes.string,
});

export default MessagePropType;