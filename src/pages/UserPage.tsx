import { useSelector } from "react-redux";
import type { RootState } from "../store";

const UserPage = () => {

    const users = useSelector((state: RootState) => state.users.users);
    return (
        <div>
            {users.map((u) => (
                <div key={u.id}>
                    <h3>{u.firstName}</h3 >
                </div>
            ))}
        </div>
    )
}

export default UserPage;
