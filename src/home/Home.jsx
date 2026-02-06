export default function Home() {
  return (
    <div className=" w-200 h-175 p-10 grid grid-cols-4 justify-between content-start gap-2 ">
      <div className=" row-span-3 bg-green-500"></div>
      <div className="h-24 col-span-2 bg-green-500"></div>
      <div className="h-24  bg-red-600"></div>
      <div className="h-24  bg-[#FBB230]"></div>
      <div className="h-24  bg-red-600"></div>
      <div className="row-span-2 bg-green-500"></div>
      <div className="h-24  bg-red-600"></div>
      <div className="h-24 bg-[#FBB230]"></div>
    </div>
  );
}
