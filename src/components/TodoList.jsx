import { Calendar } from 'lucide-react';
import TodoItem from './TodoItem';

const TodoList = ({
  todos,
  editingId,
  editText,
  setEditText,
  toggleTodo,
  startEdit,
  saveEdit,
  cancelEdit,
  deleteTodo
}) => {
  if (todos.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        <Calendar size={48} className="mx-auto mb-4 text-gray-300" />
        <p>No todos found</p>
        <p className="text-sm">Add some tasks to get started!</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editingId={editingId}
          editText={editText}
          setEditText={setEditText}
          toggleTodo={toggleTodo}
          startEdit={startEdit}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
