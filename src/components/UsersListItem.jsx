import { FaRegTrashCan } from "react-icons/fa6";
import Button from "./Button.jsx";
import { removeUser } from '../store';
import { useThunk } from '../hooks/use-thunk';
import ExpandablePanel from "./ExpandablePanel.jsx"
import AlbumsLists from "./AlbumsLists.jsx";

function UsersListItem({ user }) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleClick = () => {
        doRemoveUser(user);
    }

    const header = <>
        <Button className='mr-3' loading={isLoading} onClick={handleClick}>
            <FaRegTrashCan />
        </Button>
        {error && <div>Error removing user...</div>}
        {user.name}
    </>;

    return (
        <ExpandablePanel header={header}>
            <AlbumsLists user={user} />
        </ExpandablePanel>
    );
}

export default UsersListItem;

