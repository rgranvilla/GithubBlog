import { useContext, useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDay,
  faComment,
  faArrowUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import { GithubBlogContext, IssuesDTO } from '../../contexts/GithubBlogContext';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { PostInfoContainer, WrapperItens } from './PostInfo.styles';

function PostInfo() {
  const navigate = useNavigate();
  const { issueNumber } = useParams();
  const { getPost, activedPost } = useContext(GithubBlogContext);

  const { html_url, title, user, created_at, comments } = activedPost;

  useEffect(() => {
    issueNumber ? getPost(issueNumber) : null;
  }, []);

  return (
    <PostInfoContainer>
      <header>
        <div onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </div>

        <a href={html_url} target="blank">
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </header>

      <h1>{title}</h1>

      <div className="footer">
        <WrapperItens>
          <FontAwesomeIcon icon={faGithub} />
          <span>{user.login}</span>
        </WrapperItens>

        <WrapperItens>
          <FontAwesomeIcon icon={faCalendarDay} />
          <time>
            {formatDistanceToNow(new Date(created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </time>
        </WrapperItens>

        <WrapperItens>
          <FontAwesomeIcon icon={faComment} />
          <span>{comments} comentários</span>
        </WrapperItens>
      </div>
    </PostInfoContainer>
  );
}

export { PostInfo };
