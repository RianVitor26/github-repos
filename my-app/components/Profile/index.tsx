"use client"

import { useEffect, useState } from "react";
import { BsPersonHearts, BsPersonCheckFill } from "react-icons/bs"
import { FaGithub, FaMapMarkerAlt } from "react-icons/fa"
import { TbWorldCode } from "react-icons/tb"
import { StarsRating } from "@/components/Stars";
import { ContactPopover } from "../Popover";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";


interface IProfileProps{
    login: string;
    bio: string;
    forks: number;
    blog: string;
    location: string;
    followers: number;
    following: number;
    avatar_url: string | any;
  }
  
 
export const Profile = () => {

    const [profile, setProfile] = useState<IProfileProps>();

    useEffect(() => {
      fetch("https://api.github.com/users/rianvitor26", {
        cache: "default",
        method: 'GET'
      })
        .then((response) => response.json())
        .then((data) => setProfile(data));
    }, []);

    console.log(profile)

  return (
      <div className="flex flex-col w-full items-center">
           <div className="w-40 h-40 rounded-full">
            <img src={profile?.avatar_url} alt="Imagem de perfil de RianVitor26" className="h-full w-full rounded-full"></img>
           </div>
           
           <h1 className="p-2 font-bold text-gray-100">{profile?.login}</h1>
           <h2 className="text-center text-gray-200 font-medium">{profile?.bio}</h2>
            <StarsRating/>
           <div className="w-full flex items-center justify-center gap-4 my-2">
                <span className="flex items-center gap-2"><BsPersonHearts className="text-gray-800"/><p className="text-gray-400">{profile?.followers} Seguidores</p></span>
                <span className="flex items-center gap-2"><BsPersonCheckFill className="text-gray-800"/><p className="text-gray-400">{profile?.following} Seguindo</p></span>
           </div>
           <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-gray-800"/><p className="text-gray-400">{profile?.location}</p></span>

           <div className="w-full flex flex-col gap-2 mt-5">
                <div className="flex items-center justify-center w-full gap-5 mb-5">
                  <Link href="https://github.com/RianVitor26"><FaGithub className="text-gray-900 text-2xl"/></Link>
                  <Link href="https://www.linkedin.com/in/rian-vitor-dos-santos-de-almeida-a036aa202/"><FaLinkedin className="text-blue-600 text-2xl"/></Link>
                  <Link href="https://rianvitor26dos-santos-de-almeida.vercel.app/"><TbWorldCode className="text-green-500 text-2xl"/></Link>
                </div>
                <ContactPopover/>
           </div> 
      </div>
  );
}