import BentoCardSmall from "./Small";
import BentoCardNormal from "./Normal";
import BentoCardBig from "./Big";
import BentoCardLarge from "./Large";

export interface BentoCardProps {
  type?: "small" | "normal" | "big" | "large";
  color: string;
  image?: string;
  logo: string;
  title: string;
  description?: string;
  className?: string;
  link?: string;
}

export default function BentoCard(props: BentoCardProps) {
  if (!props.type || props.type == "normal") {
    return <BentoCardNormal {...props} />;
  }
  if (props.type == "small") {
    return <BentoCardSmall {...props} />;
  }
  if (props.type == "big") {
    return <BentoCardBig {...props} />;
  }
  if (props.type == "large") {
    return <BentoCardLarge {...props} />;
  }
  return <div>NOTHING</div>;
}
