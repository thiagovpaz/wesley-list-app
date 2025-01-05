import { useState } from "react";
import { ButtonIcon } from "../../components/ButtonIcon";
import Modal from "../../components/Modal";
import { Search } from "../../components/Search";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { colors } from "../../global/colors";

import {
  CreateTask,
  EditTask,
  GetOneTask,
  RemoveTask,
} from "../../services/task/taskService";
import * as Styled from "./styles";
import TaskList from "./components/TaskList";
import { Profile } from "../../components/Profile";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [idToEdit, setIdToEdit] = useState(0);
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pendente");

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleFilter() {
    alert("Funcionalidade ainda em desenvolvimento... 🔨");
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleStatusChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setStatus(event.target.value);
  }

  async function handleCreateTask() {
    if (title === "") {
      return alert("Preencha o título");
    }

    if (description === "") {
      return alert("Preencha a descrição");
    }
    const data = await CreateTask(title, description, status);
    if (data?.status === 201) {
      handleCloseModal();
    }
    return;
  }

  async function handleSalveEdit(id: number) {
    const data = await EditTask(id, title, description, status);
    if (data?.status === 200) {
      alert("tarefa atualizada!");
      return setIsEditModalOpen(false);
    }
    return alert("Erro ao editar");
  }

  async function handleSelectedTask(id: number) {
    setIdToEdit(id);
    const data = await GetOneTask(id);
    setTitle(data?.data?.title);
    setStatus(data?.data?.status);
    setDescription(data?.data?.description);
    setIsEditModalOpen(true);
    return;
  }

  async function handleRemoveTask(id: number) {
    const data = await RemoveTask(id);
    if (data?.status == 200) {
      alert("Tarefa removida");
      return setIsEditModalOpen(false);
    } else {
      alert("Erro ao remover tarefa");
      return setIsEditModalOpen(false);
    }
  }

  return (
    <Styled.Container>
      <Profile />
      <h1>Gerenciamento de tarefas</h1>
      <Styled.Section>
        <Styled.SectionSearch>
          <Search
            placeholder="Pesquisar tarefa..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <ButtonIcon
            typeIcon="add"
            style={{ marginLeft: 10 }}
            onClick={handleOpenModal}
          />
          <ButtonIcon
            typeIcon="filter"
            style={{ marginLeft: 10 }}
            onClick={handleFilter}
          />
        </Styled.SectionSearch>
      </Styled.Section>
      <Styled.SectionList>
        <TaskList
          search={search}
          handleSelectedTask={handleSelectedTask}
          isModalOpen={isModalOpen}
          isEditModalOpen={isEditModalOpen}
        />
      </Styled.SectionList>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <h2 style={{ color: colors.gray[600] }}>Adicionar nova tarefa</h2>
          <Styled.SectionModal>
            <Input
              placeholder="Título"
              style={{ marginBottom: 20 }}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Descrição"
              style={{ marginBottom: 20 }}
              onChange={(e) => setDescription(e.target.value)}
            />

            <select
              value={status}
              onChange={handleStatusChange}
              style={{
                backgroundColor: colors.gray[400],
                marginBottom: 20,
                width: "8rem",
                padding: "0.5rem",
                outline: "none",
                borderRadius: "4px",
                fontSize: "1rem",
              }}
            >
              <option value="pendente">Pendente</option>
              <option value="iniciado">Iniciado</option>
              <option value="concluido">Concluído</option>
            </select>

            <Styled.SectionModalButton>
              <Button
                onClick={handleCreateTask}
                variant="primary"
                title="Adicionar"
                style={{ width: "8rem" }}
              />
              <Button
                onClick={handleCloseModal}
                variant="secondary"
                title="Fechar"
                style={{ width: "8rem" }}
              />
            </Styled.SectionModalButton>
          </Styled.SectionModal>
        </Modal>
      )}

      {isEditModalOpen && (
        <Modal onClose={() => setIsEditModalOpen(false)}>
          <h2 style={{ color: colors.gray[600] }}>Editar tarefa</h2>
          <Styled.SectionModal>
            <Input
              value={title}
              placeholder="Título"
              style={{ marginBottom: 20 }}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              value={description}
              placeholder="Descrição"
              style={{ marginBottom: 20 }}
              onChange={(e) => setDescription(e.target.value)}
            />

            <select
              value={status}
              onChange={handleStatusChange}
              style={{
                backgroundColor: colors.gray[400],
                marginBottom: 20,
                width: "8rem",
                padding: "0.5rem",
                outline: "none",
                borderRadius: "4px",
                fontSize: "1rem",
              }}
            >
              <option value="pendente">Pendente</option>
              <option value="iniciado">Iniciado</option>
              <option value="concluido">Concluído</option>
            </select>

            <Styled.SectionModalButton>
              <Button
                onClick={() => handleSalveEdit(idToEdit)}
                variant="primary"
                title="Salvar"
                style={{ width: "8rem" }}
              />
              <Button
                onClick={() => handleRemoveTask(idToEdit)}
                variant="secondary"
                title="Excluir"
                style={{ width: "8rem" }}
              />
            </Styled.SectionModalButton>
          </Styled.SectionModal>
        </Modal>
      )}
    </Styled.Container>
  );
}
