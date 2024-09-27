import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import React from "react";
import clsx from "clsx";

type Props = {
    buttonLink: LinkField
    buttonText: string | null;
    className?:string
};

export function Button({buttonLink,buttonText,className}: Props) {
  return (
    <PrismicNextLink className={clsx("rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors hover:bg-orange-700 md_text-2xl duration-150", className)} field={buttonLink}>
      {buttonText}
    </PrismicNextLink>
  );
}

export default Button;
