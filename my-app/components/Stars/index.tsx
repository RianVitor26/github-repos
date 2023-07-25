"use client"

import { Rating } from "@material-tailwind/react";
 
export const StarsRating = () => {
  return <Rating className="flex text-yellow-400 mb-3" value={5} readonly />;
}