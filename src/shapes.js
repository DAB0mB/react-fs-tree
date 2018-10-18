import PropTypes from 'prop-types'

export const Node = (() => {
  const shape = {
    name: PropTypes.string.isRequired,
    opened: PropTypes.boolean,
    selected: PropTypes.boolean,
    mode: PropTypes.oneOf(['a', 'd', 'm']),
  }

  shape.children = PropTypes.arrayOf(PropTypes.shape(shape)).isRequired

  return PropTypes.shape(shape)
})()

export default {
  Node
}
