import { useMoralis } from "react-moralis";
import { Button, Modal } from "antd";
import { useState } from "react";
import Text from "antd/lib/typography/Text";
import { connectors } from "./config";
import { getEllipsisTxt } from "../../utils/formatters";
// const styles = {
import React from "react";
import { ConnectBtn, ConnectorView, StyledButton, WalletIcon } from "./style";
// import { getExplorer } from "../../utils/network";
const Account = () => {
  const { authenticate, isAuthenticated, account, logout, authError } =
    useMoralis();
  console.log(isAuthenticated, authError);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);

  if (!account) {
    return (
      <StyledButton>
        <ConnectBtn onClick={() => setIsAuthModalVisible(true)}>
          {account ? getEllipsisTxt(account) : "Connect Wallet"}
        </ConnectBtn>
        <Modal
          visible={isAuthModalVisible}
          footer={null}
          onCancel={() => setIsAuthModalVisible(false)}
          bodyStyle={{
            padding: "15px",
            fontSize: "17px",
            fontWeight: "500",
          }}
          style={{ fontSize: "16px", fontWeight: "500" }}
          width="340px"
        >
          <div
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              fontWeight: "700",
              fontSize: "20px",
            }}
          >
            Connect Wallet
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {connectors.map(({ title, icon, connectorId }, key) => (
              <ConnectorView
                key={key}
                onClick={async () => {
                  try {
                    await authenticate({ provider: connectorId });
                    window.localStorage.setItem("connectorId", connectorId);
                    setIsAuthModalVisible(false);
                  } catch (e) {
                    console.error(e);
                  }
                }}
              >
                <WalletIcon src={icon} alt={title} />
                <Text style={{ fontSize: "14px" }}>{title}</Text>
              </ConnectorView>
            ))}
          </div>
        </Modal>
      </StyledButton>
    );
  }

  return (
    <StyledButton>
      <div onClick={() => setIsModalVisible(true)}>
        <p style={{ color: "#21BF96", margin: 0, cursor: "pointer" }}>
          {getEllipsisTxt(account, 6)}
        </p>
      </div>
      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        bodyStyle={{
          padding: "15px",
          fontSize: "17px",
          fontWeight: "500",
        }}
        style={{ fontSize: "16px", fontWeight: "500" }}
        width="400px"
      >
        Account
        <Button
          size="large"
          type="primary"
          style={{
            width: "100%",
            marginTop: "10px",
            borderRadius: "0.5rem",
            fontSize: "16px",
            fontWeight: "500",
          }}
          onClick={async () => {
            await logout();
            window.localStorage.removeItem("connectorId");
            setIsModalVisible(false);
          }}
        >
          Disconnect Wallet
        </Button>
      </Modal>
    </StyledButton>
  );
};
export default Account;
