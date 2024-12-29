import React from 'react';
import * as Styled from './styles';

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <Styled.Overlay>
      <Styled.Modal>
        <button onClick={onClose} style={{ float: 'right' }}>X</button>
        {children}
      </Styled.Modal>
    </Styled.Overlay>
  );
}
