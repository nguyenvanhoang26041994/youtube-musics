import { useEffect } from 'react';

export default function useSkipBubbleEvent(e, target, handler) {
  useEffect(
    () => {
      if (target && target.contains(e.target)) {
        return;
      }

      return handler();
    },
    [target, handler]
  );
}
