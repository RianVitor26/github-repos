

import { Profile } from "@/components/Profile";
import { Repositories } from "@/components/Repositories";

export default function Home() {
  return (
    <div className="w-full bg-gray-800">
      <aside className="w-11/12 mx-auto flex flex-col items-center bg-gray-700 mb-10 rounded-md p-3">
          <Profile/>
      </aside>
      <main className="w-11/12 min-h-screen mx-auto bg-gray-700 rounded-md p-3">
          <Repositories/>
      </main>
    </div>
  )
}
