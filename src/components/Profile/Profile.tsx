import avatar from '../../assets/avatar.svg';
import github from '../../assets/github.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

import { Avatar, ContentWrapper, ProfileContainer, WrapperItens } from './Profile.styles';

function Profile() {
  return (
    <ProfileContainer>
      <Avatar src={avatar} alt="" />
      <ContentWrapper>
        <header>
          <span>Cameron Williamson</span>
          <a href="#">
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <div className="content">
          <span>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa
            quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </span>
        </div>
        <div className="footer">
          <WrapperItens>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </WrapperItens>

          <WrapperItens>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </WrapperItens>

          <WrapperItens>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </WrapperItens>
        </div>
      </ContentWrapper>
    </ProfileContainer>
  );
}

export { Profile };
