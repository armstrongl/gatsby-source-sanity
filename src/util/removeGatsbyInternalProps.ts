import {SanityInputNode, SanityNode} from '../types/gatsby'

// Gatsby mutates (...tm) the `internal` object, adding `owner`.
// This function helps "clean" the internal representation if we are readding/reusing the node
export const removeGatsbyInternalProps = (node: SanityNode | SanityInputNode): SanityInputNode => {
  if (!node || typeof node.internal === 'undefined') {
    return node
  }

  const {mediaType, type, contentDigest} = node.internal
  return {
    ...node,
    internal: {
<<<<<<< HEAD
      // TODO: Figure out what to set this to
      owner: ``,
      mediaType,
      type,
      contentDigest
=======
      mediaType,
      type,
      contentDigest,
>>>>>>> 5df5066569fd92d6ef60873a38b8c345d21d82e4
    },
  }
}
