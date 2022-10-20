import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

import { Avatar, ContentWrapper, ProfileContainer, WrapperItens } from './Profile.styles';
import { useContext } from 'react';
import { GithubBlogContext } from '../../contexts/GithubBlogContext';

function Profile() {
  const { user } = useContext(GithubBlogContext);
  const { avatar_url, name, html_url, bio, login, company, followers } = user;

  return (
    <ProfileContainer>
      <Avatar>
        <img src={avatar_url} alt="" />
      </Avatar>
      <ContentWrapper>
        <header>
          <span>{name}</span>
          <a href={html_url} target="blank">
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <div className="content">
          <span>{bio}</span>
        </div>
        <div className="footer">
          <WrapperItens>
            <FontAwesomeIcon icon={faGithub} />
            <span>{login}</span>
          </WrapperItens>

          {company && (
            <WrapperItens>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{company}</span>
            </WrapperItens>
          )}

          <WrapperItens>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{followers} seguidores</span>
          </WrapperItens>
        </div>
      </ContentWrapper>
    </ProfileContainer>
  );
}

export { Profile };
