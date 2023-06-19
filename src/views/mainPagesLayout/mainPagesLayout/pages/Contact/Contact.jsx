import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import Container from '../../../../../component/common/Container/Container';
import ComponentTitle from '../common/component/ComponentTitle';
import { useDeviceInfo } from '../../../../../component/CustomHooks/useDevice';
import ContactCard from './element/ContactCard';
import ContactFormContainer from './element/ContactFormContainer';

const Contact = observer(() => {
  const { isMdDown } = useDeviceInfo();
  return (
    <ContactMainContainer>
      <ContactContainer size={isMdDown}>
        <ComponentTitle
          title="Contact Us"
          subTitle="Histudy Course Contact can join with us and It will work."
        />
        <ContactCard />
        <ContactFormContainer />
      </ContactContainer>
    </ContactMainContainer>
  );
});

export default Contact;

const ContactMainContainer = styled(Container)`
  background: linear-gradient(180deg, #eedefd 0%, #ffffff 100%) !important;
  height: 100%;
`;

const ContactContainer = styled.div`
  margin-top: ${(props) => (props.size ? '1rem' : '3.5rem')};
`;
