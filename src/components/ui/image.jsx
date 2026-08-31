import * as React from "react";

// Not a shadcn primitive — a minimal stand-in for the original project's
// custom <Image> component (its source wasn't available to port). Thin
// wrapper around <img> with lazy loading. Swap for a CDN-backed component
// later if you need blur-up placeholders, srcset, etc.
const Image = React.forwardRef(({ src, alt = "", className, ...props }, ref) => {
  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      {...props}
    />
  );
});
Image.displayName = "Image";

export { Image };
