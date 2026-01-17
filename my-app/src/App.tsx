import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Input from "./components/input";
import Button from "./components/Button";

interface User {
    name: string;
    email: string;
}

function App() {
    const [user, setUser] = useState<User>({
        name: "john",
        email: "john@gmail.com",
    });

    const handleClick = () => {
        alert(`User: ${user.name}, email: ${user.email}`);
    };

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <h2>
                {user.name} — {user.email}
            </h2>
            <div className="card">
                <Input
                    type="name"
                    placeholder="Name"
                    onChange={(value) => setUser({ ...user, name: value })}
                />
                <br />

                <Input
                    type="email"
                    placeholder="Email"
                    onChange={(value) =>
                        setUser({ ...user, email: value + "@gmail.com" })
                    }
                />
                <br />
                <br />
                <Button text="Submit" type="submit" onClick={handleClick} />
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>

            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
