import { useMemo } from "react";
import BadgeProps from "../../../types/props/BadgeProps.type";
import { POKEMON_TYPE_COLORS } from "../../../utils/PokemonTypeColors";

const Badge = (props: BadgeProps) => {
  const { text } = props;

  //Handle badge text and bg color
  const badgeColor = useMemo(() => {
    return POKEMON_TYPE_COLORS[text] ?? "text-white bg-blue-500";
  }, [text]);

  return (
    <span
      className={`px-2 py-1 text-xs capitalize font-bold rounded ${badgeColor}`}
    >
      {text}
    </span>
  );
};

export default Badge;
