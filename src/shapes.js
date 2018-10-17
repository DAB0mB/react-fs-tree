import PropTypes from 'prop-types'

export const Node = (() => {
  const shape = {
    name: PropTypes.string.isRequired,
    collapsed: PropTypes.boolean,
    selected: PropTypes.boolean,
    mode: PropTypes.oneOf(['added', 'deleted', 'modified']),
  }

  shape.children = PropTypes.arrayOf(PropTypes.shape(shape)).isRequired

  return PropTypes.shape(shape)
})()

export default {
  Node
}
