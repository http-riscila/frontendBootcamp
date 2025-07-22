import { useState } from "react";
import {
  Modal,
  Button,
  TextInput,
  Label,
  Textarea,
  ModalHeader,
  ModalBody,
  FileInput,
} from "flowbite-react";
import editIcon from "../assets/icons/edit-icon.png";
import { useUser } from "../contexts/UserContext";
import { editUserInfo, editProfileImage } from "../services/user-service";

export default function UserModal() {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    bio: "",
    profileImageUrl: null,
  });

  const { user } = useUser();
  const { refreshUser } = useUser();

  function handleChange(e) {
    const { name, value } = e.target;

    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    setUserData((prevData) => ({
      ...prevData,
      profileImageUrl: file,
    }));
  }

  async function handleEditUserInfo(e) {
    e.preventDefault();

    const { profileImageUrl, ...userInfo } = userData;

    try {
      if (
        userInfo.name.trim() ||
        userInfo.email.trim() ||
        userInfo.bio.trim()
      ) {
        const updatedUser = await editUserInfo(userInfo, user.id);
        console.log("User data updated", updatedUser);
      }

      if (profileImageUrl) {
        const formData = new FormData();
        formData.append("profileImage", profileImageUrl);
        const updatedImage = await editProfileImage(formData, user.id);
        console.log("Profile image updated", updatedImage);
      }

      refreshUser();
      setOpen(false);
    } catch (error) {
      console.log("Error editing the user's information", error);
    } finally {
      setUserData({
        name: "",
        email: "",
        bio: "",
        profileImageUrl: null,
      });
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="cursor-pointer active:scale-90"
      >
        <img src={editIcon} className="h-5 w-5" />
      </button>
      <Modal show={open} onClose={() => setOpen(false)}>
        <ModalHeader className="border-b-0 p-6">Editar Perfil</ModalHeader>
        <hr className="mx-6 border-t-2 border-[#E5E7EB] px-6"></hr>
        <ModalBody>
          <form onSubmit={handleEditUserInfo} className="flex flex-col gap-4">
            <div>
              <Label htmlFor="name" value="name">
                Nome
              </Label>
              <TextInput
                id="name"
                name="name"
                value={userData.name}
                className="rounded-xl border border-[var(--color-primary)]"
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="email" value="email">
                Email
              </Label>
              <TextInput
                id="email"
                name="email"
                value={userData.email}
                className="rounded-xl border border-[var(--color-primary)]"
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="bio" value="bio">
                Biografia
              </Label>
              <Textarea
                id="bio"
                name="bio"
                maxLength={260}
                value={userData.bio}
                className="rounded-xl border border-[var(--color-primary)]"
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="profile-image" value="profile-image">
                Foto de perfil
              </Label>
              <FileInput
                id="profile-image"
                name="profile-image"
                className="rounded-xl border border-[var(--color-primary)] file:bg-[var(--color-primary)] file:hover:bg-[var(--color-tertiary)]"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
            <Button
              type="submit"
              className="cursor-pointer transition-all duration-500 ease-in-out hover:bg-[var(--color-tertiary)]"
            >
              Salvar alterações
            </Button>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
}
