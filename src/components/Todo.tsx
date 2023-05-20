import { useState } from "react";
import { TodoT } from "../../types";
import Modal from "../components/Modal";

interface Props {
    todo: TodoT;
    toggleTodoStatus: () => void;
    handleDeleteTodo: () => void;
}

function Todo({ todo, toggleTodoStatus, handleDeleteTodo }: Props) {
    const [isDeleteDialogVisible, setIsDeleteDialogVisible] = useState(false);

    const handleConfirmDelete = () => {
        handleDeleteTodo();
        setIsDeleteDialogVisible(false);
    };

    return (
        <>
            <div className="todo-container">
                <input
                    className="mr-3"
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={toggleTodoStatus}
                />
                <p className={todo.isDone ? "line-through" : ""}>
                    {todo.title}
                </p>
                <button onClick={() => setIsDeleteDialogVisible(true)}>
                    🗑
                </button>
            </div>
            <Modal isOpen={isDeleteDialogVisible}>
                <h2 className="mb-5">
                    Möchten Sie die Aufgabe wirklich löschen?
                </h2>
                <span>
                    <button className="mr-3" onClick={handleConfirmDelete}>
                        Löschen
                    </button>
                    <button onClick={() => setIsDeleteDialogVisible(false)}>
                        Abbrechen
                    </button>
                </span>
            </Modal>
        </>
    );
}

export default Todo;
