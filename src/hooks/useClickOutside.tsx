import { useEffect, useRef } from "react";

const useClickOutside = (fn: Function) => {
  let domNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (event: MouseEvent) => {
      if (domNode.current) {
        if (!domNode.current.contains(event.target as HTMLDivElement)) {
          fn();
        }
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return domNode;
};

export default useClickOutside;
