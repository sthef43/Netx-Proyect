import styles from "@/app/ui/styles/home.module.css"
import { Roboto, Montserrat } from "next/font/google";
import Image from "next/image";

const robotoFont = Roboto({ subsets: ['latin'], weight: "400"})
const monstserratFont = Montserrat({ subsets: ['latin'], weight: "400"})

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 relative">
        <div className="bg-white border-2 border-purple-400 rounded-lg p-6 flex flex-col md:flex-row items-center gap-4 bg-transparent z-10 relative">
          <div className="flex flex-col justify-center">
            <h1 className={`${styles.text_Welcome} ${robotoFont.className}`}>Welcome</h1>
            <p className={`text-lg text-gray-700 mb-4 ${monstserratFont.className}`}>
              Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra, ac porttitor orci.
            </p>
            <a href="/blog" className="outline outline-1 outline-offset-2 border-purple-700 text-purple-700 hover:text-white py-2 px-4 rounded hover:bg-purple-800 md:w-[30%] transition-colors w-full">
              Go to Blog
            </a>
          </div>
          <figure className="h-full">
            <Image
              className="rounded-md hidden md:block"
              alt="imagen-dsktop"
              src={`/image-desktop.jpeg`}
              width={1000}
              height={300}
            />
          </figure>
          <Image
            className="rounded-md block md:hidden h-56 object-cover"
            alt="imagen-dsktop"
            src={`/image-mobile.jpeg`}
            width={600}
            height={100}
          />
        </div>
      </div>
      <div className={`hidden md:block absolute top-0 right-0 bottom-0 left-2/3 z-0 ${styles.square_color}`}></div>
    </main>
  );
}
