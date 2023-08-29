// framer-motion.d.ts

import { ScrollOptions, ScrollProps } from "framer-motion";

declare module "framer-motion" {
  interface ScrollProps {
    offset?: [number, number];
  }

  interface ScrollOptions {
    offset?: [number, number];
  }
}
