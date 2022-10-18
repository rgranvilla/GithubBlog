import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDay,
  faComment,
  faArrowUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { PostInfoContainer, WrapperItens } from './PostInfo.styles';
import { useNavigate } from 'react-router-dom';

function PostInfo() {
  const navigate = useNavigate();
  return (
    <PostInfoContainer>
      <header>
        <div onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </div>

        <a href="#Github">
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </header>

      <h1>JavaScript data types and data structures</h1>

      <div className="footer">
        <WrapperItens>
          <FontAwesomeIcon icon={faGithub} />
          <span>cameronwll</span>
        </WrapperItens>

        <WrapperItens>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>Há 1 dia</span>
        </WrapperItens>

        <WrapperItens>
          <FontAwesomeIcon icon={faComment} />
          <span>5 comentários</span>
        </WrapperItens>
      </div>
    </PostInfoContainer>
  );
}

export { PostInfo };
