export type IconProps = astroHTML.JSX.SVGAttributes & {
  // Namespaces the SVG ids (gradients, clip paths) a logo defines for itself,
  // so two instances on one page don't paint with each other's <defs>. It is
  // not a DOM id: logos that need it use it, Icon drops it for the rest.
  idPrefix?: string;
};
