import Image from "next/image";
import React from "react";
import { Container } from "@src/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-lg leading-normal italic dark:text-gray-800">
               <Mark>SnapSavvy</Mark> has completely transformed my workflow. The AI-powered image restoration and enhancement tools are simply incredible. SnapSavvy is a game-changer for photographers like me.
            </p>

            <Avatar
              image={userOneImg}
              name="Alice Thompson"
              title=" Professional Photographer at Alice Thompson Photography"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-lg leading-normal italic dark:text-gray-800">
              As an e-commerce store owner, having high-quality product photos is crucial.<Mark>SnapSavvy’s</Mark> background removal and image enhancement features have been a lifesaver. I can quickly remove backgrounds and enhance product images, making them look clean and professional.
            </p>

            <Avatar
              image={userTwoImg}
              name="James Rodriguez"
              title="E-commerce Store Owner at Trendy Tees"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-lg leading-normal italic dark:text-gray-800">
               <Mark>SnapSavvy</Mark> has taken our social media content to the next level. The AI colorization tool is perfect for adding a vibrant touch to our black-and-white photos, and the enhancement features make every post look stunning.
            </p>

            <Avatar
              image={userThreeImg}
              name="Emily Clark"
              title="Social Media Manager at Creative Agency Inc."
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium dark:text-gray-800">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
