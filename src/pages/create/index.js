import React, { useState, useRef } from "react";
//import abi and contract address
import { contract_abi, contract_address } from "../../contract/contractInfo";
//import component
import { Checkbox } from "antd";
import Button from "../../components/Button";
import {
  AnnounceView,
  ContainImg,
  CreateLink,
  DashContainer,
  DashWrapper,
  DescText,
  HeaderSection,
  HeaderText,
  ImgWrapper,
  InputName,
  LabelContainer,
  LabelGroup,
  LabelView,
  MessageGroup,
  MessageView,
  OptionContainer,
  OptionGroup,
  OptionView,
  SmallText,
  StyledCreateView,
} from "./style.create";
// import assets
import img from "../../assets/img/temp.png";
import { Loading } from "../../components/Loading";
import { toast } from "react-toastify";
import { isEmpty } from "../../utils/isEmpty";
import { useMoralis } from "react-moralis";
const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient("https://ipfs.infura.io:5001");

const CreateNFT = () => {
  const { Moralis, account, isAuthenticated } = useMoralis();
  const fileRef = useRef();
  const handleFile = () => {
    fileRef.current.click();
  };

  const [fileUrl, updateFileUrl] = useState("");
  const [showUrl, updateShowUrl] = useState("");
  const [buffer, setBuffer] = useState("");
  const [name, setName] = useState(``);
  const [description, setDescription] = useState(``);
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState([
    {
      num: 1,
      trait_type: "",
      value: "",
    },
  ]);

  const onChangePlusMint = () => {
    const data = [...meta];
    data.push({
      num: meta[meta.length - 1].num + 1,
      trait_type: "",
      value: "",
    });
    setMeta(data);
  };

  const onChangeInput = (e, num) => {
    const data = meta.map((item) => {
      if (item.num === num) {
        item[e.target.name] = e.target.value;
      }
      return item;
    });
    setMeta(data);
  };

  const onChoose = async (e) => {
    updateShowUrl(URL.createObjectURL(e.target.files[0]));
    const file = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      setBuffer(Buffer(reader.result));
    };
  };
  const onUpload = async (e) => {
    if (!buffer) {
      toast.error("Please select the file.");
    } else {
      setLoading(true);

      var hash = "";
      for await (const result of ipfs.add(buffer)) {
        hash = result.path;
      }

      updateFileUrl(hash);
      setLoading(false);
      toast.success("Successfully uploaded.");
    }
  };
  const onMint = async () => {
    if (!isAuthenticated) {
      toast.error("Please connect your wallet.");
    } else {
      let data = {};
      data.name = name;
      data.description = description;
      const metaData = meta.map((item) => {
        delete item.num;
        return item;
      });
      data.attributes = metaData;
      data.image = fileUrl;
      if (isEmpty(data.image)) {
        toast.error("Image file is required");
      } else if (isEmpty(data.name)) {
        toast.error("Name file is required");
      } else if (isEmpty(data.description)) {
        toast.error("Description file is required");
      } else if (isEmpty(data.attributes)) {
        toast.error("Property file is required");
      }
      const file = new Moralis.File("file.json", {
        base64: btoa(JSON.stringify(data)),
      });
      await file.saveIPFS();

      const options = {
        contractAddress: contract_address,
        functionName: "safeMint",
        abi: contract_abi,
        params: {
          _tokenURI: file.ipfs(),
          _addr: account,
        },
      };
      Moralis.executeFunction(options)
        .then((response) => toast.success("Successfully minted"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <StyledCreateView>
      <Loading flag={loading} />
      <DashWrapper>
        <DashContainer>
          <HeaderSection>
            <HeaderText>Mint My File</HeaderText>
            <DescText>
              After choose the image and enter fields, you can mint a NFT.
            </DescText>
            <CreateLink>
              <Button>Button</Button>
              <SmallText>Link</SmallText>
            </CreateLink>
          </HeaderSection>
        </DashContainer>
        <ImgWrapper>
          <ContainImg src={img} />
        </ImgWrapper>
      </DashWrapper>
      <LabelContainer>
        <AnnounceView>
          <Button
            onClick={(e) => onUpload(e)}
            style={{ position: "absolute", bottom: "20px" }}
          >
            Upload
          </Button>
          <ContainImg
            src={
              fileUrl
                ? `https://ipfs.io/ipfs/${fileUrl}`
                : showUrl
                ? showUrl
                : img
            }
          />
        </AnnounceView>
        <Button onClick={handleFile}>Choose file</Button>
      </LabelContainer>
      <LabelContainer>
        <SmallText>Name</SmallText>
        <InputName
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <LabelView>
          <LabelGroup>
            <SmallText>Type</SmallText>
          </LabelGroup>
          <LabelGroup>
            <SmallText>Value</SmallText>
          </LabelGroup>
        </LabelView>
        {meta.map((item, key) => (
          <LabelView key={key + 1}>
            <LabelGroup>
              <InputName
                type="text"
                name="trait_type"
                placeholder="type"
                value={item.trait_type}
                onChange={(e) => {
                  onChangeInput(e, key + 1);
                }}
              />
            </LabelGroup>
            <LabelGroup>
              <InputName
                type="text"
                name="value"
                placeholder="value"
                value={item.value}
                onChange={(e) => {
                  onChangeInput(e, key + 1);
                }}
              />
            </LabelGroup>
          </LabelView>
        ))}

        <Button onClick={() => onChangePlusMint()}>Add property</Button>
        <MessageGroup>
          <SmallText>Description</SmallText>
          <MessageView
            placeholder="Enter a description for your file"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </MessageGroup>
      </LabelContainer>
      <OptionContainer>
        <SmallText>Visibility </SmallText>
        <OptionView>
          <Checkbox style={{ marginRight: "10px" }} />
          <SmallText>Private</SmallText>
        </OptionView>
        <OptionView>
          <Checkbox style={{ marginRight: "10px" }} />
          <SmallText>Public Web2</SmallText>
        </OptionView>
        <OptionView>
          <Checkbox checked style={{ marginRight: "10px" }} />
          <SmallText>Public IPFS</SmallText>
        </OptionView>
        <OptionView>
          <Checkbox style={{ marginRight: "10px" }} />
          <SmallText>Mobile App</SmallText>
        </OptionView>
        <OptionGroup>
          <Button onClick={onMint}>Mint</Button>
        </OptionGroup>
      </OptionContainer>
      <input
        type="file"
        hidden
        ref={fileRef}
        accept="image/*,video/*,audio/*,webgl/*,.glb,.gltf"
        onChange={(e) => onChoose(e)}
      />
    </StyledCreateView>
  );
};

export default CreateNFT;
