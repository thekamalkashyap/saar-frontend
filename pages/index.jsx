import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useRef } from "react";
import { Shree, Aastha, Isha, Mann } from "@/components/Home";
import Image from "next/image";
import Link from "next/link";
import img from "@/public/main.png";
import { ProductCard as Card } from "@/components/Home";
import { useRouter } from "next/router";

export default function Home() {
  const carouselRef = useRef();
  const { category } = useRouter().query;
  const categoryArr = ["shree", "aastha", "isha", "mann"];

  // useEffect(() => {
  //   if (!carouselRef.current) return;
  //   carouselRef.current.goToSlide(categoryArr.indexOf(category));
  // }, [category]);

  return (
    <div>
      <Carousel
        ref={carouselRef}
        swipeable={false}
        draggable={false}
        responsive={{ all: { breakpoint: { max: 4000, min: 0 }, items: 1 } }}
        showDots={false}
        // arrows={false}
      >
        <Shree />
        <Aastha />
        <Isha />
        <Mann />
      </Carousel>
      <div className="px-16 bg-white">
        <div className="h-screen grid grid-rows-2 grid-cols-2 bg-[url('/main.png')]">
          <div className="flex items-center justify-center h-screen col-start-2">
            <Image src={img} className="h-[85vh] w-[75vh] object-cover" />
          </div>
        </div>
      </div>
      {/* products */}
      <div className="p-10 sm:p-16">
        <div className="flex items-center justify-between mb-12 text-shree">
          <h2 className="text-xl font-semibold">Our Products</h2>
          <Link href="/products">View All</Link>
        </div>
        <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
          {[...Array(10).keys()].map((e) => (
            <Card key={e} />
          ))}
        </div>
      </div>
    </div>
  );
}
