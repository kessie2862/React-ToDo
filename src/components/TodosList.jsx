import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({ todosProps, handleChange, delTodo, setUpdate }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          setUpdate={setUpdate}
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          delTodo={delTodo}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todosProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodosList;
