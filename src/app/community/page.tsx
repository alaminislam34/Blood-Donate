// components/Community.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import { FaRegThumbsUp, FaShare, FaImage } from "react-icons/fa";

interface Post {
  id: number;
  content: string;
  image?: string;
  comments: string[];
  likes: number;
}

export default function Community() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState<string | null>(null);

  const handlePost = () => {
    if (postContent.trim() === "") return;

    const newPost: Post = {
      id: Date.now(),
      content: postContent,
      image: postImage || undefined,
      comments: [],
      likes: 0,
    };

    setPosts([newPost, ...posts]);
    setPostContent("");
    setPostImage(null);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      {/* Post Input Box */}
      <div className="bg-white shadow-md rounded-2xl p-4 space-y-4">
        <div className="flex items-start gap-4">
          {/* User Avatar */}
          <Image
            src="/donors/fatema.jpg"
            alt="User"
            width={48}
            height={48}
            className="rounded-full object-cover w-12 h-12"
          />

          {/* Input Section */}
          <div className="flex-1 space-y-3">
            {/* Textarea */}
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full bg-gray-100 text-sm rounded-xl p-3 resize-none focus:outline-none focus:ring"
              rows={3}
            />

            {/* Image Upload + Button */}
            <div className="flex justify-between items-center flex-wrap gap-4">
              {/* Upload */}
              <label className="flex items-center gap-2 text-blue-600 cursor-pointer hover:text-blue-700 text-sm">
                <FaImage className="text-lg" />
                <span>Upload Image</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setPostImage(reader.result as string);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </label>

              {/* Post Button */}
              <button
                onClick={handlePost}
                className="ml-auto bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-full transition"
              >
                Post
              </button>
            </div>

            {/* Image Preview */}
            {postImage && (
              <div className="pt-2">
                <Image
                  src={postImage}
                  alt="Preview"
                  width={500}
                  height={300}
                  className="rounded-lg max-h-72 object-contain mx-auto"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg space-y-2"
        >
          <div className="flex items-start space-x-4">
            <Image
              height={100}
              width={100}
              src="/default-user.png"
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="text-sm">{post.content}</p>
              {post.image && (
                <Image
                  height={100}
                  width={100}
                  src={post.image}
                  alt="Post"
                  className="mt-2 rounded max-h-72 object-contain"
                />
              )}
              <div className="flex items-center justify-between text-sm mt-2 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      setPosts((prev) =>
                        prev.map((p) =>
                          p.id === post.id ? { ...p, likes: p.likes + 1 } : p
                        )
                      );
                    }}
                    className="flex items-center gap-1 hover:text-blue-500"
                  >
                    <FaRegThumbsUp /> {post.likes}
                  </button>
                  <span>{post.comments.length} comments</span>
                </div>
                <button className="flex items-center gap-1 hover:text-blue-500">
                  <FaShare /> Share
                </button>
              </div>
              {/* Comments */}
              <div className="mt-2 space-y-2">
                {post.comments.map((comment, i) => (
                  <div
                    key={i}
                    className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded text-sm"
                  >
                    {comment}
                  </div>
                ))}
                <input
                  placeholder="Write a comment..."
                  className="w-full text-sm px-3 py-1 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
                  onKeyDown={(e) => {
                    if (
                      e.key === "Enter" &&
                      e.currentTarget.value.trim() !== ""
                    ) {
                      const text = e.currentTarget.value;
                      setPosts((prev) =>
                        prev.map((p) =>
                          p.id === post.id
                            ? { ...p, comments: [...p.comments, text] }
                            : p
                        )
                      );
                      e.currentTarget.value = "";
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
