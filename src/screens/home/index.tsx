import { useState } from 'react';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Search } from '../../components/Search';
import Modal from '../../components/Modal';

import { Input } from '../../components/Input';
import { colors } from '../../global/colors';
import { Button } from '../../components/Button';

import * as Styled from './styles';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState("pendente");

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleStatusChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setStatus(event.target.value);
  }

  return (
    <Styled.Container>
      <h1>Gerenciamento de tarefas</h1>
      <Styled.Section>
        <Styled.SectionSearch>
          <Search placeholder='Pesquisar tarefa...' />
          <ButtonIcon typeIcon='add' style={{ marginLeft: 10 }} onClick={handleOpenModal} />
          <ButtonIcon typeIcon='filter' style={{ marginLeft: 10 }} />
        </Styled.SectionSearch>
      </Styled.Section>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <h2 style={{ color: colors.gray[600] }}>Adicionar nova tarefa</h2>
          <Styled.SectionModal>
            <Input placeholder='Título' style={{ marginBottom: 20 }} />
            <Input placeholder='Descrição' style={{ marginBottom: 20 }} />

            <select
              value={status}
              onChange={handleStatusChange}
              style={{
                backgroundColor: colors.gray[400],
                marginBottom: 20,
                width: '8rem',
                padding: '0.5rem',
                outline: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
              }}
            >
              <option value="pendente">Pendente</option>
              <option value="iniciado">Iniciado</option>
              <option value="concluido">Concluído</option>
            </select>

            <Styled.SectionModalButton>
              <Button onClick={handleCloseModal} variant='primary' title='Adicionar' style={{ width: '8rem' }} />
              <Button onClick={handleCloseModal} variant='secondary' title='Fechar' style={{ width: '8rem' }} />
            </Styled.SectionModalButton>
          </Styled.SectionModal>
        </Modal>
      )}
    </Styled.Container>
  );
}
