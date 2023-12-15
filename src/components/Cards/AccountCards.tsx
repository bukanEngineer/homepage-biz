import React from "react";
import { Card, Divider } from "antd";
import CustomCard from "./CustomCard";

const { Meta } = Card;

const AccountSection: React.FC<{ title: string; description: string; data: any[]; isLast: boolean}> = ({
  title,
  description,
  data,
  isLast,
}) => (
  <>
    <Meta title={title} description={description} style={{ paddingBottom: "16px" }} />

    <div style={{ gap: "16px", display: "flex", flexDirection: "column" }}>
      {data.map((card, index) => (
        <CustomCard key={index} {...card} />
      ))}
    </div>

    {!isLast && <Divider />}
  </>
);

const AccountCards: React.FC = () => {
  const cashAccountData = [
    {
      link: "https://www.youtube.com/",
      avatarSrc: "https://www.worldometers.info/img/flags/my-flag.gif",
      title: "IDR Account",
      bank: "Bank Sahabat Sampoerna (BSS)",
      accountType: "Virtual Account",
      totalMoney: "Rp.20.312.3123,00",
    },
    {
      link: "https://www.youtube.com/",
      avatarSrc: "https://www.worldometers.info/img/flags/my-flag.gif",
      title: "Sobat Account",
      bank: "Bank Sahabat Sampoerna (BSS)",
      accountType: "Virtual Account",
      totalMoney: "Rp.20.312.3123,00",
    },
  ];

  const earnAccountData = [
    {
      link: "#",
      title: "IDR Account",
      description: "Grow your money with deposit from IDR 10.000.000 up to IDR 100.000.000",
    },
  ];

  const flexPayData = [
    {
      link: "#",
      title: "IDR Account",
      description: "Grow your money with deposit from IDR 10.000.000 up to IDR 100.000.000",
      buttonText: "Explore Sekarang",
      buttonLink: "#",
    },
  ];

  const sections = [
    { title: "Cash Account", description: "For accepting or sending payment", data: cashAccountData },
    { title: "Earn Account", description: "Access and manage your savings account here", data: earnAccountData },
    {
      title: "Loan Account",
      description: "Access and manage your Loan here",
      data: [...cashAccountData, ...flexPayData.map((card) => ({ ...card, showChevron: false }))],
    },
  ];

  return (
    <Card title="Account" style={{ width: "100%", height: "100%" }}>
      {sections.map((section, index) => (
        <AccountSection key={index} {...section} isLast={index === sections.length - 1} />
      ))}
    </Card>
  );
};

export default AccountCards;
