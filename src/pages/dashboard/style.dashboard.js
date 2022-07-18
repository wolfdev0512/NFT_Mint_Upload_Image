import styled from "styled-components";
// import Link from "next/link";
export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const DashWrapper = styled.div`
  display: flex;
  position: relative;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    & > *:not(:last-child) {
      margin-top: 30px;
    }
  }
`;
export const DashContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;
export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 40px 0 0;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;
// export const ContainImg = styled.img``;
export const ImgWrapper = styled.div`
  width: 50%;
  height: 100%;
  min-height: 300px;
  position: absolute;
  right: 0;
  background-color: #cacaca;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    position: relative;
  }
`;
export const ContainImg = styled.img`
  width: 50px;
  height: 50px;
`;
export const LinkGroup = styled.div`
  display: flex;
  flex-direction: row;
  & > *:not(:last-child) {
    margin-right: 50px;
  }
`;
export const HeaderText = styled.span`
  font-size: 60px;
  font-weight: 700;
  width: 80%;
  @media screen and (max-width: 1024px) {
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 26px;
    width: 100%;
  }
`;
export const DescText = styled.span`
  font-size: 24px;
  margin-top: 30px;
  max-width: 400px;
  @media screen and (max-width: 768px) {
    max-width: none;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
    width: 100%;
  }
`;
export const SmallText = styled.span`
  font-size: 18px;
`;
export const CreateLink = styled.div`
  display: flex;
  margin-top: 40px;
  & > *:not(:last-child) {
    margin-right: 50px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 40px auto 0 auto;
    & > *:not(:last-child) {
      margin: 0 0 15px 0;
    }
  }
`;
export const CreateBtn = styled.div`
  color: white;
  background-color: #3f53d9;
  width: 120px;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
`;

export const StepContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 100px auto 100px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;
export const StepView = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    text-align: center;
  }
`;
export const StepWrapper = styled.div`
  background-color: #cacaca;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 100%;
`;
export const AnnounceView = styled.div`
  width: 50%;
  background-color: #cacaca;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const AnnounceSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 0 0 40px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

export const LabelContainer = styled.div`
  max-width: 1440px;
  margin: 130px auto;
  width: 100%;
  padding: 0 20px;
  & > *:not(:last-child) {
    margin-bottom: 30px;
  }
`;
export const LabelView = styled.div`
  display: flex;
  justify-content: space-between;
  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;
export const LabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & > *:not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const MessageGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputName = styled.input`
  border: 3px solid #cacaca;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  font-size: 18px;
`;
export const MessageView = styled.textarea`
  width: 100%;
  height: 300px;
  font-size: 30px;
  border: 3px solid #cacaca;
  padding: 20px;
`;
export const OptionContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto 150px auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const OptionView = styled.div``;
export const CheckBox = styled.input``;
