import { useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import avatar from "../../public/uploads/nathan_headshot_avatar.jpg";

export default function ImageUpload() {
  const [imageSrc, setImageSrc] = useState<string | StaticImageData>(avatar);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImageSrc(reader.result);
        } else {
          console.error("FileReader result is not a string");
        }
      };
      reader.readAsDataURL(file);

      // Upload image to the server
      handleSubmit(file);
    }
  };

  const handleSubmit = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("Image uploaded successfully!");
    } else {
      alert("Image uploaded successfully!");
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      {/* Use Next.js Image component for StaticImageData or <img> for dynamic URLs */}
      {typeof imageSrc === "string" ? (
        <img
          src={imageSrc}
          alt="Click to change"
          onClick={handleImageClick}
          style={{
            cursor: "pointer",
            width: "150px",
            height: "150px",
            objectFit: "cover",
          }}
        />
      ) : (
        <Image
          src={imageSrc}
          alt="Click to change"
          onClick={handleImageClick}
          width={150}
          height={150}
          style={{ cursor: "pointer", objectFit: "cover" }}
        />
      )}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
    </div>
  );
}
