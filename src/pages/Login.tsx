import React, { useState } from "react";
import { UserT } from "../../types";

interface Props {
    setUser: (user: UserT) => void;
}

function Login({ setUser }: Props) {
    const [username, setUsername] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setUser({ username });
    };

    return (
        <>
            <h1>Anmeldung</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>Nutzername:</label>
                <input
                    required
                    type="text"
                    name="username"
                    onChange={(event) => setUsername(event.target.value)}
                />

                <button className="mt-4" type="submit">
                    Submit
                </button>
            </form>
        </>
    );
}

export default Login;
