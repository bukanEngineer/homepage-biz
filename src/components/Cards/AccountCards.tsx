import React, { useState, useEffect } from "react";
import { Card, Divider, Avatar } from "antd";
import { RightOutlined } from "@ant-design/icons";

const { Meta } = Card;

const AccountCards: React.FC = () => {
  const [accountData, setAccountData] = useState({
    account: "IDR Account",
    bank: "Bank Sahabat Sampoerna (BSS)",
    paymethod: "Virtual Account",
    number: "123456",
    totalMoney: "Rp.20.312.3123,00",
  });

  useEffect(() => {
    // Fetch data from your API and update the state
    // Example API call using fetch:
    fetch("your_api_endpoint")
      .then((response) => response.json())
      .then((data) => setAccountData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // The empty dependency array ensures the effect runs once when the component mounts

  return (
    <Card title="Account" style={{ width: "100%", height: "100%" }}>
      <Meta
        title="Cash Account"
        description="For accepting or sending payment"
        style={{ paddingBottom: "16px" }}
      />

      <div
        className="cashAccount"
        style={{ gap: "16px", display: "flex", flexDirection: "column" }}
      >
        <a
          href="https://www.youtube.com/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              padding: "12px 16px",
              backgroundColor: "#F6F7F9",
              display: "flex",
              borderRadius: 8,
              cursor: "pointer",
              transition: "box-shadow 0.3s",
              alignItems: "center",
              gap: 12,
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow =
                "0px 2px 4px 0px rgba(51, 51, 51, 0.16)")
            }
            onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <Avatar src="https://www.worldometers.info/img/flags/my-flag.gif" />

            <div
              className="textAccount"
              style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
            >
              <span style={{ fontWeight: 700 }}>{accountData.account}</span>
              <span>{accountData.bank}</span>
              <span>{accountData.paymethod}</span>
            </div>

            <div
              className="righSection"
              style={{ display: "flex", gap: "8px" }}
            >
              <span style={{ fontWeight: 700, fontSize: 16 }}>
                {accountData.totalMoney}
              </span>
              <RightOutlined style={{ fontSize: 20 }} />
            </div>
          </div>
        </a>

        <a
          href="https://www.youtube.com/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              padding: "12px 16px",
              backgroundColor: "#F6F7F9",
              display: "flex",
              borderRadius: 8,
              cursor: "pointer",
              transition: "box-shadow 0.3s",
              alignItems: "center",
              gap: 12,
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow =
                "0px 2px 4px 0px rgba(51, 51, 51, 0.16)")
            }
            onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <Avatar src="https://www.worldometers.info/img/flags/my-flag.gif" />

            <div
              className="textAccount"
              style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
            >
              <span style={{ fontWeight: 700 }}>{accountData.account}</span>
              <span>{accountData.bank}</span>
              <span>{accountData.paymethod}</span>
            </div>

            <div
              className="righSection"
              style={{ display: "flex", gap: "8px" }}
            >
              <span style={{ fontWeight: 700, fontSize: 16 }}>
                {accountData.totalMoney}
              </span>
              <RightOutlined style={{ fontSize: 20 }} />
            </div>
          </div>
        </a>
      </div>

      <Divider />
      <Meta
        title="Earn Account"
        description="Access and manage your savings account here"
        style={{ paddingBottom: "16px" }}
      />

      <div
        className="cashAccount"
        style={{ gap: "16px", display: "flex", flexDirection: "column" }}
      >
        <a
          href="https://www.youtube.com/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              padding: "12px 16px",
              backgroundColor: "#F6F7F9",
              display: "flex",
              borderRadius: 8,
              cursor: "pointer",
              transition: "box-shadow 0.3s",
              alignItems: "center",
              gap: 12,
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow =
                "0px 2px 4px 0px rgba(51, 51, 51, 0.16)")
            }
            onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <div
              className="textAccount"
              style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
            >
              <span style={{ fontWeight: 700 }}>IDR Earn Deposit</span>
              <span>
                Grow your money with deposit from IDR 10.000.000 up to IDR
                100.000.000
              </span>
            </div>

            <div
              className="righSection"
              style={{ display: "flex", gap: "8px" }}
            >
              <span style={{ fontWeight: 700, fontSize: 16 }}>
                {accountData.totalMoney}
              </span>
              <RightOutlined style={{ fontSize: 20 }} />
            </div>
          </div>
        </a>
      </div>

      <Divider />

      <Meta
        title="Loan Account"
        description="Access and manage your Loan here"
        style={{ paddingBottom: "16px" }}
      />

      <div
        className="cashAccount"
        style={{ gap: "16px", display: "flex", flexDirection: "column" }}
      >
        <a
          href="https://www.youtube.com/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              padding: "12px 16px",
              backgroundColor: "#F6F7F9",
              display: "flex",
              borderRadius: 8,
              cursor: "pointer",
              transition: "box-shadow 0.3s",
              alignItems: "center",
              gap: 12,
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow =
                "0px 2px 4px 0px rgba(51, 51, 51, 0.16)")
            }
            onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <div
              className="textAccount"
              style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
            >
              <span style={{ fontWeight: 700 }}>Loan Account</span>
              <span>Manage your loan, and keep track your repayment</span>
            </div>

            <div
              className="righSection"
              style={{ display: "flex", gap: "8px" }}
            >
              <span style={{ fontWeight: 700, fontSize: 16 }}>
                {accountData.totalMoney}
              </span>
              <RightOutlined style={{ fontSize: 20 }} />
            </div>
          </div>
        </a>

        <a
          href="https://www.youtube.com/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              padding: "12px 16px",
              backgroundColor: "#F6F7F9",
              display: "flex",
              borderRadius: 8,
              cursor: "pointer",
              transition: "box-shadow 0.3s",
              alignItems: "center",
              gap: 12,
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow =
                "0px 2px 4px 0px rgba(51, 51, 51, 0.16)")
            }
            onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <div
              className="textAccount"
              style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
            >
              <span style={{ fontWeight: 700 }}>Flexpay</span>
              <span>
                Take control of your credit with ease! and track your repayment
                progress in one convenient place.
              </span>
            </div>

            <div
              className="righSection"
              style={{ display: "flex", gap: "8px" }}
            >
              <span style={{ fontWeight: 700, fontSize: 16 }}>
                {accountData.totalMoney}
              </span>
              <RightOutlined style={{ fontSize: 20 }} />
            </div>
          </div>
        </a>
      </div>
    </Card>
  );
};

export default AccountCards;
