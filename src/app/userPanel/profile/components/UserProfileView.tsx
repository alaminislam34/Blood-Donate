"use client";

import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";

type UserProfile = {
  name: string;
  username: string;
  email: string;
  phone: string;
  bloodGroup: string;
  addressPresent: string;
  addressPermanent: string;
  facebook: string;
  whatsapp: string;
  image: string | null;
};

interface Props {
  profile: UserProfile;
  onSave: (updatedProfile: UserProfile) => void;
  onCancel: () => void;
}

export default function UserProfileForm({ profile, onSave, onCancel }: Props) {
  const [formData, setFormData] = useState<UserProfile>(profile);
  const [previewImage, setPreviewImage] = useState<string | null>(
    profile.image
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto p-6 bg-white rounded-lg shadow space-y-6"
    >
      {/* প্রোফাইল ছবি */}
      <div className="flex items-center gap-6">
        <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-200">
          {previewImage ? (
            <Image
              height={100}
              width={100}
              src={previewImage}
              alt="Profile Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-400">
              ছবি নেই
            </div>
          )}
        </div>
        <div>
          <label className="cursor-pointer text-blue-600 hover:underline">
            নতুন ছবি আপলোড করুন
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
          {formData.image && (
            <p className="text-sm mt-1 truncate max-w-xs">{formData.image}</p>
          )}
        </div>
      </div>

      {/* পুরো নাম */}
      <div>
        <label
          htmlFor="name"
          className="block mb-1 font-semibold text-gray-700"
        >
          পূর্ণ নাম
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 p-2"
          required
        />
      </div>

      {/* ইউজারনেম (শুধু পড়ার জন্য) */}
      <div>
        <label
          htmlFor="username"
          className="block mb-1 font-semibold text-gray-700"
        >
          ইউজারনেম
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          readOnly
          className="w-full rounded border border-gray-300 p-2 bg-gray-100 cursor-not-allowed text-gray-500"
        />
      </div>

      {/* ইমেইল (শুধু পড়ার জন্য) */}
      <div>
        <label
          htmlFor="email"
          className="block mb-1 font-semibold text-gray-700"
        >
          ইমেইল
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          readOnly
          className="w-full rounded border border-gray-300 p-2 bg-gray-100 cursor-not-allowed text-gray-500"
        />
      </div>

      {/* ফোন নম্বর */}
      <div>
        <label
          htmlFor="phone"
          className="block mb-1 font-semibold text-gray-700"
        >
          মোবাইল নম্বর
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 p-2"
        />
      </div>

      {/* ব্লাড গ্রুপ */}
      <div>
        <label
          htmlFor="bloodGroup"
          className="block mb-1 font-semibold text-gray-700"
        >
          ব্লাড গ্রুপ
        </label>
        <input
          type="text"
          id="bloodGroup"
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 p-2"
        />
      </div>

      {/* বর্তমান ঠিকানা */}
      <div>
        <label
          htmlFor="addressPresent"
          className="block mb-1 font-semibold text-gray-700"
        >
          বর্তমান ঠিকানা
        </label>
        <textarea
          id="addressPresent"
          name="addressPresent"
          value={formData.addressPresent}
          onChange={handleChange}
          rows={2}
          className="w-full rounded border border-gray-300 p-2"
        />
      </div>

      {/* স্থায়ী ঠিকানা */}
      <div>
        <label
          htmlFor="addressPermanent"
          className="block mb-1 font-semibold text-gray-700"
        >
          স্থায়ী ঠিকানা
        </label>
        <textarea
          id="addressPermanent"
          name="addressPermanent"
          value={formData.addressPermanent}
          onChange={handleChange}
          rows={2}
          className="w-full rounded border border-gray-300 p-2"
        />
      </div>

      {/* ফেসবুক লিংক */}
      <div>
        <label
          htmlFor="facebook"
          className="block mb-1 font-semibold text-gray-700"
        >
          ফেসবুক প্রোফাইল লিংক
        </label>
        <input
          type="url"
          id="facebook"
          name="facebook"
          value={formData.facebook}
          onChange={handleChange}
          placeholder="https://facebook.com/yourprofile"
          className="w-full rounded border border-gray-300 p-2"
        />
      </div>

      {/* হোয়াটসঅ্যাপ */}
      <div>
        <label
          htmlFor="whatsapp"
          className="block mb-1 font-semibold text-gray-700"
        >
          হোয়াটসঅ্যাপ নম্বর
        </label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          placeholder="+8801XXXXXXXXX"
          className="w-full rounded border border-gray-300 p-2"
        />
      </div>

      {/* বাটনসমূহ */}
      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded px-6 py-2 font-semibold transition flex-1"
        >
          পরিবর্তন সংরক্ষণ করুন
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-400 hover:bg-gray-500 text-white rounded px-6 py-2 font-semibold transition flex-1"
        >
          বাতিল করুন
        </button>
      </div>
    </form>
  );
}
