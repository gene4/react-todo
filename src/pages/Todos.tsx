import React, { useState } from "react";
import { TodoT, UserT } from "../../types";
import Todo from "../components/Todo";

interface Props {
    setUser: (user: UserT | undefined) => void;
}

function Todos({ setUser }: Props) {
    const [todos, setTodos] = useState<TodoT[]>([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [todoTitle, setTodoTitle] = useState("");

    const toggleTodoStatus = (index: number) => {
        const updatedTodos = [...todos];
        updatedTodos[index].isDone = !updatedTodos[index].isDone;
        setTodos(updatedTodos);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTodo = { title: todoTitle, isDone: false };
        setTodos([newTodo, ...todos]);
        setTodoTitle("");
    };

    const handleDeleteTodo = (index: number) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    return (
        <div className="has-text-left">
            <h1>Übersicht Aufgabenliste</h1>
            <div className="is-flex is-justify-content-space-between mb-5">
                <h2>Meine Aufgaben</h2>
                <button onClick={() => setUser(undefined)}>Abmelden</button>
            </div>
            <div className="mb-5">
                <button
                    className="mb-4"
                    onClick={() => setIsFormVisible(!isFormVisible)}
                >
                    + Neue Aufgabe hinzufügen
                </button>
                {isFormVisible && (
                    <form
                        className="is-flex is-justify-content-space-between"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            value={todoTitle}
                            onChange={(event) =>
                                setTodoTitle(event.target.value)
                            }
                            required
                            placeholder="Aufgabe"
                        />

                        <button type="submit">Hinzufügen</button>
                        <button onClick={() => setIsFormVisible(false)}>
                            Abbrechen
                        </button>
                    </form>
                )}
            </div>
            {todos &&
                todos.map((todo, index) => (
                    <Todo
                        key={index}
                        todo={todo}
                        toggleTodoStatus={() => toggleTodoStatus(index)}
                        handleDeleteTodo={() => handleDeleteTodo(index)}
                    />
                ))}
            {todos.length === 0 && <p>Sie haben keine Aufgaben</p>}
        </div>
    );
}

export default Todos;
