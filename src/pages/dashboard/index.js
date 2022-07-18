import { useState } from "react";
//import component
import { Checkbox } from "antd";
// import style
import {
  ContainImg,
  CreateBtn,
  CreateLink,
  DashContainer,
  HeaderSection,
  HeaderText,
  ImgWrapper,
  StepContainer,
  StepWrapper,
  StyledDashboard,
  DescText,
  DashWrapper,
  SmallText,
  StepView,
  AnnounceView,
  InputName,
  LabelGroup,
  AnnounceSection,
  MessageView,
  LabelContainer,
  OptionView,
  OptionGroup,
  OptionContainer,
  LabelView,
  MessageGroup,
} from "./style.dashboard";
// import assets
import img from "../../assets/img/temp.png";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  return (
    <StyledDashboard>
      <DashWrapper>
        <DashContainer>
          <HeaderSection>
            <HeaderText>
              Showcase your thought provoking topics and ideas
            </HeaderText>
            <DescText>
              Create the NFT collections and items your self. Please click
              follow button for create your OWN NFT.
            </DescText>
            <CreateLink>
              <CreateBtn>Create</CreateBtn>
              <CreateBtn>Create</CreateBtn>
            </CreateLink>
          </HeaderSection>
        </DashContainer>
        <ImgWrapper>
          <ContainImg src={img} />
        </ImgWrapper>
      </DashWrapper>
      <StepContainer>
        <StepView>
          <StepWrapper>
            <ContainImg src={img} />
          </StepWrapper>
          <DescText>Start with step one</DescText>
          <SmallText>Nunc mattis feugiat ex scelerisque congue.</SmallText>
        </StepView>
        <StepView>
          <StepWrapper>
            <ContainImg src={img} />
          </StepWrapper>
          <DescText>Start with step one</DescText>
          <SmallText>Nunc mattis feugiat ex scelerisque congue.</SmallText>
        </StepView>
      </StepContainer>
      <DashContainer>
        <AnnounceView>
          <ContainImg src={img} />
        </AnnounceView>
        <AnnounceSection>
          <HeaderText>Big company announcement</HeaderText>
          <DescText>
            Big company announcement or simple sub-header taking two or more
            lines.
          </DescText>
          <CreateLink>
            <CreateBtn>Button</CreateBtn>
          </CreateLink>
        </AnnounceSection>
      </DashContainer>
      <LabelContainer>
        <LabelView>
          <LabelGroup>
            <SmallText>Name</SmallText>
            <InputName
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </LabelGroup>
          <LabelGroup>
            <SmallText>Email</SmallText>
            <InputName
              type="email"
              placeholder="Your email"
              defaultValue="test@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </LabelGroup>
        </LabelView>

        <LabelGroup>
          <SmallText>Role</SmallText>
          <InputName
            placeholder="Your name"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </LabelGroup>

        <MessageGroup>
          <SmallText>Message</SmallText>
          <MessageView
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </MessageGroup>
      </LabelContainer>
      <OptionContainer>
        <SmallText>Opt-in</SmallText>
        <OptionView>
          <Checkbox style={{ marginRight: "10px" }} />
          <SmallText>Marketing Emails</SmallText>
        </OptionView>
        <OptionView>
          <Checkbox style={{ marginRight: "10px" }} />
          <SmallText>News & Updates Emails</SmallText>
        </OptionView>
        <OptionView>
          <Checkbox style={{ marginRight: "10px" }} />
          <SmallText>Production Process Emails</SmallText>
        </OptionView>
        <OptionGroup>
          <CreateBtn>Submit</CreateBtn>
        </OptionGroup>
      </OptionContainer>
    </StyledDashboard>
  );
};

export default Dashboard;
