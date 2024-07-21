import React from "react";
import "./Button.scss";

export default function Button({text, variant, className, href, newTab}) {
  const getClassName = () => {
    if (variant == 'secondary')
      return 'secondary-button'
    return 'main-button'
  }

  return (
    <div className={className}>
      <a className={getClassName()} href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}
