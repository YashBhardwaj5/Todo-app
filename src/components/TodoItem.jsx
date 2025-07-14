import { Check, Edit2, Trash2, X } from 'lucide-react';

const TodoItem = ({
  todo,
  editingId,
  editText,
  setEditText,
  toggleTodo,
  startEdit,
  saveEdit,
  cancelEdit,
  deleteTodo
}) => (
  <div
    className={`p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors ${
      todo.completed ? 'bg-gray-50' : ''
    }`}
  >
    {/* Checkbox */}
    <button
      onClick={() => toggleTodo(todo.id)}
      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
        todo.completed
          ? 'bg-green-500 border-green-500 text-white'
          : 'border-gray-300 hover:border-green-500'
      }`}
    >
      {todo.completed && <Check size={12} />}
    </button>

    {/* Content */}
    <div className="flex-1 min-w-0">
      {editingId === todo.id ? (
        <div className="flex gap-2">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <button onClick={saveEdit} className="px-2 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700">
            <Check size={14} />
          </button>
          <button onClick={cancelEdit} className="px-2 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700">
            <X size={14} />
          </button>
        </div>
      ) : (
        <div>
          <p className={`${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>{todo.text}</p>
          <p className="text-xs text-gray-400 mt-1">{new Date(todo.createdAt).toLocaleDateString()}</p>
        </div>
      )}
    </div>

    {/* Actions */}
    {editingId !== todo.id && (
      <div className="flex gap-1">
        <button onClick={() => startEdit(todo.id, todo.text)} className="p-1 text-gray-400 hover:text-blue-600">
          <Edit2 size={16} />
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="p-1 text-gray-400 hover:text-red-600">
          <Trash2 size={16} />
        </button>
      </div>
    )}
  </div>
);
export default TodoItem;
