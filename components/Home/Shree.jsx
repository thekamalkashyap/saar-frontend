import Image from "next/image";
import logo from "@/public/logoS.png";
import searchSvg from "@/public/search.svg";
import cartSvg from "@/public/cart.svg";
import profileSvg from "@/public/profile.svg";
import img from "@/public/main.png";
import Link from "next/link";
import { useRouter } from "next/router";
export default () => {
  const router = useRouter();
  return (
    <div>
      <h3 className="h-12 leading-10 text-center rounded-t-xl bg-shree text-shree_txt ">
        FREE SHIPPING ON ALL ORDERS
      </h3>
      <div className="h-screen flex justify-between items-start bg-cover bg-[url('/main.png')] p-16">
        <div className="text-shree">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <nav className="mt-8">
            <ul className="flex gap-5 text-lg">
              <li
                className={"cursor-pointer capitalize font-bold"}
                onClick={() => {
                  router.query.category = "shree";
                  router.push(router);
                }}
              >
                Shree
              </li>
              <li
                className={"cursor-pointer capitalize"}
                onClick={() => {
                  router.query.category = "aastha";
                  router.push(router);
                }}
              >
                Aastha
              </li>
              <li
                className={"cursor-pointer capitalize"}
                onClick={() => {
                  router.query.category = "isha";
                  router.push(router);
                }}
              >
                Isha
              </li>
              <li
                className={"cursor-pointer capitalize"}
                onClick={() => {
                  router.query.category = "mann";
                  router.push(router);
                }}
              >
                Mann
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-4">
          <div className="flex p-2 border-b border-shree">
            <Image src={searchSvg} alt="search" />
            <input
              className="w-[20rem] placeholder:text-shree text-lg text-shree px-2 bg-transparent focus:outline-none"
              type="text"
              name="search"
              id="search"
              placeholder="Search"
            />
          </div>
          <div className="flex gap-4 text-shree">
            <Image src={cartSvg} alt="cart" />
            <Image src={profileSvg} alt="profile" />
          </div>
        </div>
      </div>
      <div className="flex items-center h-screen text-shree_txt justify-evenly bg-shree">
        <h2 className="text-3xl font-bold -rotate-90">Shree</h2>
        <Image
          className=" h-[85vh] w-[75vh] object-cover border-4 border-shree_txt"
          src={img}
          alt="img1"
        />
        <Image
          className=" h-[85vh] w-[75vh] object-cover border-4 border-shree_txt"
          src={img}
          alt="img2"
        />
        <h2 className="text-2xl rotate-90">The New Collection</h2>
      </div>
    </div>
  );
};
