"use client"

import {
  Card,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaCodeFork } from "react-icons/fa6"

interface Repo {
  name: string;
  description: string;
  forks: number;
  clone_url: string;
  language: string;
}

interface LanguageColorMapping {
  [key: string]: string;
}

const colorMapping: LanguageColorMapping = {
  JavaScript: 'bg-yellow-300',
  Python: 'bg-blue-300',
  Java: 'bg-red-300',
  C: 'bg-gray-400',
  CSS: 'bg-blue-500',
  TypeScript: 'bg-sky-500',
  HTML: 'bg-orange-800',
};


export const Repositories = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/rianvitor26/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  useEffect(() => {
    setFilteredRepos(repos.filter((repo) => repo.name.includes(search)));
  }, [search]);

  return (
    <div className="w-full m-auto flex flex-col">
      <input
        type="text"
        placeholder="Pesquisar por um repositório"
        className="bg-gray-800 p-3 text-gray-100 rounded-md mb-10"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <div className="w-full grid grid-cols-1 place-items-center gap-3">
        {search.length > 0 ? (
          <>
            {filteredRepos.map((repo) => {
              return (
                <Card
                  key={repo.name}
                  className="mt-6 w-full bg-gray-800 rounded-md p-5"
                >
                  <CardBody>
                    <h1 className="mb-2 text-gray-100">{repo.name}</h1>
                    <h2 className="text-gray-300">{repo.description}</h2>
                  </CardBody>
                  <CardFooter className="mt-2">
                    <Link target="_blank" href={repo.clone_url}>
                      <Button className="bg-orange-500 text-gray-800 p-2 rounded-md">
                        Código fonte
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </>
        ) : (
          <>
            {repos.map((repo) => {
              const languageColor = colorMapping[repo.language] || 'bg-gray-300';

              return (
                <Card
                  key={repo.name}
                  className="mt-6 w-full bg-gray-800 rounded-md p-5"
                >
                  <CardBody>
                    <h1 className="mb-2 text-gray-100 font-bold">{repo.name}</h1>
                    <h2 className="text-gray-300">{repo.description}</h2>
                  </CardBody>
                  <CardFooter className="mt-2 flex justify-between">
                    <div className="flex flex-col gap-2">
                      <div
                        className="text-gray-400 flex items-center gap-2"
                      >
                        <span className={`w-4 h-4 rounded-full ${languageColor}`}></span>
                        {repo.language ? repo.language : "Repo sem linguagem"}
                      </div>
                      <div className="text-gray-400 flex items-center gap-2"><FaCodeFork/>Forks {repo.forks}</div>
                    </div>
                    <Link target="_blank" href={repo.clone_url}>
                      <Button className="p-2 rounded-md bg-emerald-500">
                        Código fonte
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};
