

import { Profile } from "@/components/Profile";

export default function Home() {
  return (
    <div className="w-full h-screen bg-white">
      <aside className="w-11/12 h-1/2 mx-auto flex flex-col items-center pt-10">
          <Profile/>
      </aside>
      <main className="w-11/12 h-1/2 mx-auto">

      </main>
    </div>
  )
}
