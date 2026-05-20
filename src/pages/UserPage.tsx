import { useSelector } from "react-redux";
import type { RootState } from "../store";
import "../styles/UserPage.css";

const UserPage = () => {

    const users = useSelector((state: RootState) => state.users.users);
    return (
        <div className="user-container">
            {users.map((u) => (
                <div className="user-card" key={u.id}>
                    <div className="user-card__header">
                        <img
                            className="user-card__avatar"
                            src={u.image}
                            alt={`${u.firstName} ${u.lastName}`}
                        />
                        <div>
                            <h3 className="user-card__name">{u.firstName} {u.lastName}</h3>
                            <p className="user-card__role">{u.role}</p>
                        </div>
                    </div>
                    <div className="user-card__body">
                        <p><span>Email:</span> {u.email}</p>
                        <p><span>Phone:</span> {u.phone}</p>
                        <p><span>Company:</span> {u.company?.name}</p>
                        <p><span>City:</span> {u.address?.city}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UserPage;
