"use client";

import { useState } from "react";
import UserProfileForm from "./components/UserProfileView";
import UserProfileView from "./components/profileForm";

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

export default function UserProfilePage() {
  // Initially loaded user data (from API or dummy)
  const [profile, setProfile] = useState<UserProfile>({
    name: "Al Amin",
    username: "alamin123",
    email: "alamin@example.com",
    phone: "017xxxxxxxx",
    bloodGroup: "AB+",
    addressPresent: "Mirpur, Dhaka",
    addressPermanent: "Narayanganj, Dhaka",
    facebook: "https://facebook.com/alamin",
    whatsapp: "+88017xxxxxxxx",
    image: null,
  });

  const [isEditing, setIsEditing] = useState(false);

  const startEditing = () => setIsEditing(true);
  const cancelEditing = () => setIsEditing(false);

  const saveProfile = (updatedProfile: UserProfile) => {
    setProfile(updatedProfile);
    setIsEditing(false);
    // TODO: API call to save data on backend
  };

  return (
    <>
      {isEditing ? (
        <UserProfileForm
          profile={profile}
          onSave={saveProfile}
          onCancel={cancelEditing}
        />
      ) : (
        <UserProfileView profile={profile} onEdit={startEditing} />
      )}
    </>
  );
}
