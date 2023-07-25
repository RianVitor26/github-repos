

import { Profile } from "@/components/Profile";
import { Repositories } from "@/components/Repositories";

export default function Home() {
  return (
    <div className="w-full bg-gray-800 flex flex-col md:flex-row md:justify-between">
      <aside className="w-11/12 mx-auto flex flex-col items-center bg-gray-700 mb-10 rounded-md p-3 md:w-2/5  md:fixed md:top-0 md:left-0 md:h-screen md:border-r-2 md:border-gray-800">
          <Profile/>
      </aside>
      <span className="md:w-2/5 hidden md:block"></span>
      <main className="w-11/12 min-h-screen mx-auto bg-gray-700 rounded-md p-3 md:w-3/5">
          <Repositories/>
      </main>
    </div>
  )
}
