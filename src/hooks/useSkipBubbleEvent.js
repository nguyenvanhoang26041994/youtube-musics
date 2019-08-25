import { useEffect } from 'react';

export default function useSkipBubbleEvent(nodes, e, handler) {
  for (let node of nodes) {
    if (node && node.contains(e.target)) {
      return;
    }
  }

  return handler();
}
