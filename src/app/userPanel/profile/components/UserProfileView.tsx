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
      className="w-full mx-auto p-6 bg-white  rounded-lg shadow space-y-6"
    >
      {/* Profile Image */}
      <div className="flex items-center gap-6">
        <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-200 ">
          {previewImage ? (
            <Image
              height={100}
              width={100}
              src={previewImage}
              alt="Profile Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-400 ">
              No Image
            </div>
          )}
        </div>
        <div>
          <label className="cursor-pointer text-blue-600 hover:underline">
            Upload New Photo
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

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block mb-1 font-semibold text-gray-700 "
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 p-2  dark:text-white"
          required
        />
      </div>

      {/* Username (readonly) */}
      <div>
        <label
          htmlFor="username"
          className="block mb-1 font-semibold text-gray-700 "
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          readOnly
          className="w-full rounded border border-gray-300 p-2 bg-gray-100 cursor-not-allowed  dark:text-gray-400"
        />
      </div>

      {/* Email (readonly) */}
      <div>
        <label
          htmlFor="email"
          className="block mb-1 font-semibold text-gray-700 "
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          readOnly
          className="w-full rounded border border-gray-300 p-2 bg-gray-100 cursor-not-allowed  dark:text-gray-400"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block mb-1 font-semibold text-gray-700 "
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 p-2  dark:text-white"
        />
      </div>

      {/* Blood Group */}
      <div>
        <label
          htmlFor="bloodGroup"
          className="block mb-1 font-semibold text-gray-700 "
        >
          Blood Group
        </label>
        <input
          type="text"
          id="bloodGroup"
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          className="w-full rounded border border-gray-300 p-2  dark:text-white"
        />
      </div>

      {/* Present Address */}
      <div>
        <label
          htmlFor="addressPresent"
          className="block mb-1 font-semibold text-gray-700 "
        >
          Present Address
        </label>
        <textarea
          id="addressPresent"
          name="addressPresent"
          value={formData.addressPresent}
          onChange={handleChange}
          rows={2}
          className="w-full rounded border border-gray-300 p-2  dark:text-white"
        />
      </div>

      {/* Permanent Address */}
      <div>
        <label
          htmlFor="addressPermanent"
          className="block mb-1 font-semibold text-gray-700 "
        >
          Permanent Address
        </label>
        <textarea
          id="addressPermanent"
          name="addressPermanent"
          value={formData.addressPermanent}
          onChange={handleChange}
          rows={2}
          className="w-full rounded border border-gray-300 p-2  dark:text-white"
        />
      </div>

      {/* Facebook */}
      <div>
        <label
          htmlFor="facebook"
          className="block mb-1 font-semibold text-gray-700 "
        >
          Facebook Profile URL
        </label>
        <input
          type="url"
          id="facebook"
          name="facebook"
          value={formData.facebook}
          onChange={handleChange}
          placeholder="https://facebook.com/yourprofile"
          className="w-full rounded border border-gray-300 p-2  dark:text-white"
        />
      </div>

      {/* WhatsApp */}
      <div>
        <label
          htmlFor="whatsapp"
          className="block mb-1 font-semibold text-gray-700 "
        >
          WhatsApp Number
        </label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          placeholder="+8801XXXXXXXXX"
          className="w-full rounded border border-gray-300 p-2  dark:text-white"
        />
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded px-6 py-2 font-semibold transition flex-1"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-400 hover:bg-gray-500 text-white rounded px-6 py-2 font-semibold transition flex-1"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
