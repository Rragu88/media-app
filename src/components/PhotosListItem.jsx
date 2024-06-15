import { FaRegTrashCan } from "react-icons/fa6";
import { useRemovePhotoMutation } from "../store";

function PhotosListItem({ photo }) {
    const [removePhoto] = useRemovePhotoMutation();

    const handleRemovePhoto = () => {
        removePhoto(photo);
    }

    return (
        <div onClick={handleRemovePhoto} className="relative cursor-pointer m-2">
            <img className="h-20 w-20" src={photo.url} alt="random pic" />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 bg-gray-500/50">
                <FaRegTrashCan className="text-white text-2xl" />
            </div>
        </div>
    );
}

export default PhotosListItem;