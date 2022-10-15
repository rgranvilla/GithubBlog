import avatar from '../../assets/avatar.svg';
import github from '../../assets/github.svg';
import { FaGithub } from 'react-icons/fa';
import { HiOfficeBuilding, HiUsers } from 'react-icons/hi';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';

import { Avatar, ContentWrapper, ProfileContainer, WrapperItens } from './styles';

function Profile() {
  return (
    <ProfileContainer>
      <Avatar src={avatar} alt="" />
      <ContentWrapper>
        <div className="header">
          <span>Cameron Williamson</span>
          <a href="#">
            <img src={github} />
          </a>
        </div>
        <div className="content">
          <span>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa
            quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </span>
        </div>
        <div className="footer">
          <WrapperItens>
            <FaGithub size={18} color="#3A536B" />
            <span>cameronwll</span>
          </WrapperItens>

          <WrapperItens>
            <HiOfficeBuilding size={18} color="#3A536B" />
            <span>cameronwll</span>
          </WrapperItens>

          <WrapperItens>
            <HiUsers size={18} color="#3A536B" />
            <span>cameronwll</span>
          </WrapperItens>
        </div>
      </ContentWrapper>
    </ProfileContainer>
  );
}

export { Profile };
