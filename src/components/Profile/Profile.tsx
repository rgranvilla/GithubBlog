import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

import { Avatar, ContentWrapper, ProfileContainer, WrapperItens } from './Profile.styles';
import { useEffect, useState } from 'react';

interface Repository {
  avatar_url: string;
  name: string;
  html_url: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
}

function Profile() {
  const [repositories, setRepositories] = useState<Repository>({
    avatar_url: '',
    name: '',
    html_url: '',
    bio: '',
    login: '',
    company: '',
    followers: 0,
  });

  useEffect(() => {
    fetch('https://api.github.com/users/rgranvilla')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  const { avatar_url, name, html_url, bio, login, company, followers } = repositories;

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
