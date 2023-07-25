

import { Profile } from "@/components/Profile";
import { Repositories } from "@/components/Repositories";

export default function Home() {
  return (
    <div className="w-full bg-gray-800 flex flex-col md:flex-row">
      <aside className="w-11/12 mx-auto flex flex-col items-center bg-gray-700 mb-10 rounded-md p-3 md:w-1/2">
          <Profile/>
      </aside>
      <main className="w-11/12 min-h-screen mx-auto bg-gray-700 rounded-md p-3 md:w-1/2">
          <Repositories/>
      </main>
    </div>
  )
}
