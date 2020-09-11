import PropTypes from 'prop-types'

export const Node = (() => {
  const shape = {
    name: PropTypes.string.isRequired,
    opened: PropTypes.boolean,
    selected: PropTypes.boolean,
    mode: PropTypes.oneOf(['a', 'd', 'm']),
  }

  shape.childNodes = PropTypes.arrayOf(PropTypes.shape(shape))

  return PropTypes.shape(shape)
})()

export const Theme = PropTypes.shape({
  primary: PropTypes.string,
  selectedBackground: PropTypes.string,
  selectedText: PropTypes.string,
  modeA: PropTypes.string,
  modeD: PropTypes.string,
})

export default {
  Node,
  Theme,
}
