import Image from "next/image";
import logo from "@/public/logoA.png";
import searchSvg from "@/public/search.svg";
import cartSvg from "@/public/cart.svg";
import profileSvg from "@/public/profile.svg";
import img from "@/public/main.png";
export default () => {
  return (
    <div>
      <h3 className="h-12 leading-10 text-center rounded-t-xl bg-aastha text-aastha_txt ">
        FREE SHIPPING ON ALL ORDERS
      </h3>
      <div className="h-screen flex justify-between items-start bg-cover bg-[url('/main.png')] p-16">
        <div className="text-aastha">
          <figure>
            <Image src={logo} />
          </figure>
          <nav className="mt-8">
            <ul className="flex gap-5 text-lg">
              <li>Shree</li>
              <li className="font-bold">Aastha</li>
              <li>Isha</li>
              <li>Mann</li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-4">
          <div className="flex p-2 border-b border-aastha">
            <Image src={searchSvg} />
            <input
              className="w-[20rem] placeholder:text-aastha text-lg text-aastha px-2 bg-transparent focus:outline-none"
              type="text"
              name="search"
              id="search"
              placeholder="Search"
            />
          </div>
          <div className="flex gap-4 fill-aastha">
            <Image src={cartSvg} />
            <Image src={profileSvg} />
          </div>
        </div>
      </div>
      <div className="flex items-center h-screen text-aastha_txt justify-evenly bg-aastha">
        <h2 className="text-3xl font-bold -rotate-90">Shree</h2>
        <Image
          className=" h-[85vh] w-[75vh] object-cover border-4 border-aastha_txt"
          src={img}
        />
        <Image
          className=" h-[85vh] w-[75vh] object-cover border-4 border-aastha_txt"
          src={img}
        />
        <h2 className="text-2xl rotate-90">The New Collection</h2>
      </div>
    </div>
  );
};
