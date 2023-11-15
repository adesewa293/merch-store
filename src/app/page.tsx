import Image from "next/image";
import Link from "next/link";
import { getPosts } from "./lib/merchs";

export default async function Home() {
  const posts = getPosts();

  return (
    <>
   
      <div className="pt-6">
        <div className="pl-4 flex flex-row space-x-4">
          <Link href={}><img
            className="border-2 rounded-lg w-1/2"
            src="/hoodie-1.png"
            alt="hoodie"
          /></Link>
          <div className="w-1/2 space-y-4">
            <img
              className="border-2 rounded-lg"
              src="/baby-cap-black.png"
              alt="cap"
            />
            <img
              className="border-2 rounded-lg"
              src="/baby-onesie-beige-1.png"
              alt="onesie"
            />
          </div>
        </div>
        <div className="flex justify-between mx-4 mb-14 overflow-x-auto pt-6">
        <Image className="border-2 rounded-lg mr-4"
          src="/bag-1-dark.png"
          alt="bag"
          width={300}
          height={200}
        />
        <Image className="border-2 rounded-lg mr-4"
          src="/mug-1.png"
          alt="mug"
          width={300}
          height={200}
        />
        <Image className="border-2 rounded-lg mr-4"
          src="/cup-black.png"
          alt="cup"
          width={300}
          height={200}
        />
        <Image className="border-2 rounded-lg mr-4"
          src="/hoodie-1.png"
          alt="hoodie"
          width={300}
          height={200}
        />
        <Image className="border-2 rounded-lg mr-4"
          src="/baby-onesie-beige-1.png"
          alt="onesie"
          width={1000}
          height={200}
        />
        <Image className="border-2 rounded-lg mr-4"
          src="/t-shirt-spiral-1.png"
          alt="bag"
          width={300}
          height={200}
        />
        <Image className="border-2 rounded-lg mr-4"
          src="/hat-1.png"
          alt="hat"
          width={300}
          height={200}
        />
        <Image className="border-2 rounded-lg mr-4"
          src="/bomber-jacket-army.png"
          alt="jacket"
          width={300}
          height={200}
        />
        </div>
      </div>
    </>
  );
}
