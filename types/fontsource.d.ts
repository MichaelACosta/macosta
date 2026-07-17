// Fontsource variable-weight packages are imported for their side effect
// (self-hosted @font-face CSS) via a bare specifier with no file extension,
// so the built-in `declare module "*.css"` wildcard doesn't match them.
declare module "@fontsource-variable/archivo"
