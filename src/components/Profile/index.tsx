import { FaUser } from 'react-icons/fa';
import * as Styled from './styles';
import { useAuth } from '../../context/AuthProvider/useAuth';

export function Profile() {
  const auth = useAuth();

  function handleLogout() {
    auth.logout()
    window.location.reload();
  }

  return (
    <Styled.ProfileContainer onClick={handleLogout}>
      <FaUser size={40} style={{ marginLeft: 15, marginBottom: -25 }} />
      <h2 style={{ marginLeft: 0 }}>Logout</h2>
    </Styled.ProfileContainer>
  )
}