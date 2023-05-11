import { FC } from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';
import { ErrorType } from '../../types/Error';

interface Props {
  preparedTodos: Todo[];
  tempTodo: Todo | null;
  processing: number[];
  onChangeTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  onChangeError: React.Dispatch<React.SetStateAction<ErrorType>>;
  onChangeProcessing: React.Dispatch<React.SetStateAction<number[]>>;
}

export const TodoList: FC<Props> = ({
  preparedTodos,
  tempTodo,
  processing,
  onChangeTodos,
  onChangeError,
  onChangeProcessing,
}) => {
  return (
    <section className="todoapp__main">
      {preparedTodos.map(todo => (
        <TodoInfo
          key={todo.id}
          todo={todo}
          isLoading={processing.includes(todo.id)}
          onChangeTodos={onChangeTodos}
          onChangeError={onChangeError}
          onChangeProcessing={onChangeProcessing}
        />
      ))}

      {tempTodo && (
        <TodoInfo
          todo={tempTodo}
          isLoading={processing.includes(tempTodo.id)}
          onChangeTodos={onChangeTodos}
          onChangeError={onChangeError}
          onChangeProcessing={onChangeProcessing}
        />
      )}
    </section>
  );
};
