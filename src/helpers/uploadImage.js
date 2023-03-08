import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const uploadImage = (storage, img = "", path = "", newName = "") => {
  return new Promise((res, rej) => {
    console.log(img);
    if (img === "" || !img) {
      rej("Source Image is Empty");
    }
    const ext = img.split(".").reverse()[0];
    const name = `${path}/f${newName}${Date.now()}.${ext}`;

    const imageRef = ref(storage, name);

    fetch(img)
      .then((res) => res.blob())
      .then((blob) => {
        uploadBytes(imageRef, blob)
          .then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
              res(url);
            });
          })
          .catch((e) => {
            rej(e.message);
          });
      })
      .catch((e) => console.log("Blob Error:", e));
  });
};

export default uploadImage;
