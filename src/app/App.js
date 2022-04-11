import React, { useState } from "react";
import Users from "./components/users";
import api from "./api";
import RenderPhrase from "./components/searchStatus";

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers((prevState) =>
            prevState.filter((user) => user._id !== userId)
        );
    };
    const handleToggleBookMark = (id) => {
        const newUsers = users.map((user) => {
            if (user._id === id) {
                user.bookmark = !user.bookmark;
                return user;
            } else {
                return user;
            }
        });
        setUsers(newUsers);
    };
    return (
        <div>
            <h1>
                {" "}
                <RenderPhrase length={users.length} />
            </h1>
            <Users
                users={users}
                lenght={users.length}
                onDelete={handleDelete}
                onBookmark={handleToggleBookMark}
            />
        </div>
    );
}
export default App;
