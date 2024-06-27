

export default function Hero() {
  return (
    <main className="w-[76rem] h-[40rem] backdrop-blur-lg bg-white/30 flex rounded-lg relative">

      <div className="flex flex-col justify-center">
      <h1 className=" ml-20 text-7xl uppercase font-bold text-white">Welcome</h1>
      <h1 className=" ml-20 text-7xl uppercase font-bold text-orange-500"> to Head</h1>
      <h1 className=" ml-20 text-7xl uppercase font-bold text-white"> And Tail</h1>
      </div>

  
      
      <div className=" absolute flex bottom-20 right-20 flex-col gap-y-8">
        <button className="w-52 bg-orange-500 p-4 rounded-md font-semibold text-white border-2 ">Play With Friend</button>
        <button className="w-52 bg-orange-500 p-4 rounded-md font-semibold text-white border-2 ">Play With Stranger</button>
      </div>
    </main>
  )
}
