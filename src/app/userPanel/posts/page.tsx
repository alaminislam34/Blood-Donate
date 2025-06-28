"use client";

import Image from "next/image";
import { useState } from "react";

type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string; // ISO date string
  image?: string | null;
};

const dummyPosts: Post[] = [
  {
    id: 1,
    title: "আমার প্রথম রক্তদানের অভিজ্ঞতা",
    content:
      "কাউকে সাহায্য করতে পারা ছিল দারুণ অভিজ্ঞতা। আমি সবাইকে রক্তদান করতে উৎসাহ দিই!",
    createdAt: "2024-06-20T14:30:00Z",
    image: "/posts/blood-donation1.jpg",
  },
  {
    id: 2,
    title: "রক্তদানের জন্য কীভাবে প্রস্তুতি নেবেন",
    content:
      "রক্তদানের আগে পর্যাপ্ত পানি পান করুন এবং একটি স্বাস্থ্যকর খাবার খান। ভালোভাবে বিশ্রাম নিন!",
    createdAt: "2024-06-15T10:00:00Z",
  },
];

export default function MyPostsPage() {
  const [posts, setPosts] = useState<Post[]>(dummyPosts);
  console.log(setPosts); // এইটা ভবিষ্যতে রিমুভ করে দেওয়া ভালো

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">আমার পোস্টসমূহ</h1>

      {posts.length === 0 ? (
        <p className="text-gray-700">আপনি এখনো কোনো পোস্ট করেননি।</p>
      ) : (
        <ul className="space-y-6">
          {posts.map(({ id, title, content, createdAt, image }) => (
            <li
              key={id}
              className="border border-gray-300 rounded-lg p-4 flex flex-col md:flex-row gap-4"
            >
              {image && (
                <Image
                  height={100}
                  width={100}
                  src={image}
                  alt={title}
                  className="w-full border md:w-48 h-32 object-cover rounded-md flex-shrink-0"
                />
              )}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-blue-600">
                    {title}
                  </h2>
                  <p className="mt-2 text-gray-700 line-clamp-3">{content}</p>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  প্রকাশিতঃ{" "}
                  {new Date(createdAt).toLocaleDateString("bn-BD", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
