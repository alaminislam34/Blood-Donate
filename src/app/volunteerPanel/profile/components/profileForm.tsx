"use client";

import Image from "next/image";

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
  onEdit: () => void;
}

export default function UserProfileView({ profile, onEdit }: Props) {
  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow">
      <div className="flex items-center space-x-6 mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 ">
          {profile.image ? (
            <Image
              height={100}
              width={100}
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-400 ">
              No Image
            </div>
          )}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 ">{profile.name}</h1>
          <p className="text-sm text-gray-500 ">@{profile.username}</p>
        </div>
      </div>

      <div className="space-y-4 text-gray-700 ">
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
        <p>
          <strong>Phone:</strong> {profile.phone}
        </p>
        <p>
          <strong>Blood Group:</strong> {profile.bloodGroup}
        </p>
        <p>
          <strong>Present Address:</strong> {profile.addressPresent}
        </p>
        <p>
          <strong>Permanent Address:</strong> {profile.addressPermanent}
        </p>
        <p>
          <strong>Facebook:</strong>{" "}
          <a
            href={profile.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {profile.facebook}
          </a>
        </p>
        <p>
          <strong>WhatsApp:</strong> {profile.whatsapp}
        </p>
      </div>

      <button
        onClick={onEdit}
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white rounded px-6 py-2 font-semibold transition"
      >
        Edit Profile
      </button>
    </div>
  );
}
