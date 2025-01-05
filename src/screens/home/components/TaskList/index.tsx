import { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/Button";
import { GetTasks } from "../../../../services/task/taskService";

import * as Styled from "./styles";

export type Task = {
  id: number;
  title: string;
  description: string;
  status: string;
};

type TaskListProps = {
  search: string;
  isModalOpen?: boolean;
  isEditModalOpen?: boolean;
  handleSelectedTask(id: number): void;
};

const TaskList = ({
  handleSelectedTask,
  isModalOpen,
  isEditModalOpen,
  search,
}: TaskListProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = useRef(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      setLoading(true);
      try {
        const response = await GetTasks(currentPage);
        const data = response.tasks;
        if (Array.isArray(data)) {
          setTasks(data);
          totalPages.current = response.data.totalPages;
        } else {
          console.error("Expected an array but got:", data);
        }
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, [currentPage, isModalOpen, isEditModalOpen]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filteredTasks =
    search.length > 1
      ? tasks.filter((task) =>
          task.title.toLowerCase().includes(search.toLowerCase())
        )
      : tasks;

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Styled.Container>
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <Styled.TaskCard
                  key={task.id}
                  onClick={() => handleSelectedTask(task.id)}
                >
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <p>
                    Status: <strong>{task.status}</strong>
                  </p>
                </Styled.TaskCard>
              ))
            ) : (
              <p>Nenhuma tarefa encontrada.</p>
            )}
          </Styled.Container>

          <Styled.Pagination>
            {Array.from({ length: totalPages.current }, (_, index) => (
              <Button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                title={`${index + 1}`}
                variant={index + 1 === currentPage ? "primary" : "secondary"}
                style={{ margin: "0 5px", padding: "0.5rem 1rem" }}
              />
            ))}
          </Styled.Pagination>
        </>
      )}
    </div>
  );
};

export default TaskList;
