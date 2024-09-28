/* eslint-disable react/jsx-key */

'use client'
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json"
const page = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 py-12 pt-36">
            <h1 className="text-3xl md:text-7xl text-center font-sans font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">All courses ({courseData.courses.length})</h1>  
            <div className="flex flex-wrap justify-center">
                {courseData.courses.map((course) => (
                    <CardContainer className="inter-var m-2">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        {course.title}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                      >
                        {course.description}
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                          src={course.image}
                          height="1000"
                          width="1000"
                          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt={course.title}
                        />
                      </CardItem>
                      <div className="flex justify-between items-center mt-10 space-x-4">
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-6 py-2 rounded-xl text-xs font-normal dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 transition-all duration-300"
                                >
                                    Try Now →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold hover:opacity-90 transition-opacity duration-300"
                                >
                                    Sign Up
                                </CardItem>
                            </div>
                    </CardBody>
                  </CardContainer>
                ))}
            </div>  
        </div>
      )
}

export default page