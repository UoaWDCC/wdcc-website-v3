import { type ReactNode } from "react";
import { Button } from "./button";

interface SkybluePillButtonProps {
  href?: string;
  children: ReactNode;
}

const SkybluePillButton = ({ href, children }: SkybluePillButtonProps) => {
  return href ? (
    <Button asChild variant="skyblue" className="px-8">
      <a href={href}>{children}</a>
    </Button>
  ) : (
    <Button variant="skyblue" className="px-8 cursor-default">
      {children}
    </Button>
  );
};

export default SkybluePillButton;
