import { Tooltip, Button } from "@material-tailwind/react";
import { GiBurningMeteor } from "react-icons/gi"

export const AnimatedTooltip = ({}) => {
  return (
    <Tooltip
      className="bg-gray-900 p-2 text-gray-100 rounded-md"
      content="Know the ropes, learn the ropes"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      <Button className="absolute top-0 right-0 rounded-full"><GiBurningMeteor className="text-2xl text-orange-500"/></Button>
    </Tooltip>
  );
}