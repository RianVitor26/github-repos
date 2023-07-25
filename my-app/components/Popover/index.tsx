"use client"

import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import Link from "next/link";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const ContactPopover = () => {
    return (
        <Popover placement="bottom" >
            <PopoverHandler>
                <Button className="p-2 rounded-md bg-gray-900 text-gray-100 md: w-1/2 mx-auto">Contatos</Button>
            </PopoverHandler>
            <PopoverContent className="w-72 bg-gray-800 rounded-md" >
                <div className="mb-4 flex items-center gap-4 border-b border-blue-gray-50 p-2">
                    <div className="p-2">
                        <Typography variant="h6" color="blue-gray" className="text-gray-50 font-bold">
                           Contatos
                        </Typography>
                        <Typography variant="small" color="gray" className="text-gray-300 font-normal">
                            Converse comigo!
                        </Typography>
                    </div>
                </div>
                <List className="p-0">

                    <Link target="_blank" href="https://www.linkedin.com/in/rian-vitor-dos-santos-de-almeida-a036aa202/">
                        <ListItem className="flex items-center gap-2">
                            <ListItemPrefix>
                                <FaLinkedin className="text-blue-600 text-2xl" />
                            </ListItemPrefix>
                            <p className="text-gray-300">Linkedin</p>
                        </ListItem>
                    </Link>

                    <Link target="_blank" href="https://discord.com/channels/@me">
                        <ListItem className="flex items-center gap-2">
                            <ListItemPrefix>
                                <FaDiscord className="text-violet-600 text-2xl"/>
                            </ListItemPrefix>
                            <p className="text-gray-300"> Discord(RianVitor26#0458)</p>
                        </ListItem>
                    </Link>

                    <Link target="_blank" href="mailto:rianvitorlhe@gmail.com">
                        <ListItem className="flex items-center gap-2">
                            <ListItemPrefix>
                                <SiGmail className="text-red-600 text-2xl" />
                            </ListItemPrefix>
                            <p className="text-gray-300">rianvitorlhe@gmail.com</p>
                        </ListItem>
                    </Link>
                </List>
            </PopoverContent>
        </Popover>
    );
}