import { Card, Divider } from "antd";
import CustomCard from "./CustomCard";

const { Meta } = Card;

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
      description:
        "Grow your money with deposit from IDR 10.000.000 up to IDR 100.000.000",
    },
  ];

  const flexPayData = [
    {
      link: "#",
      title: "IDR Account",
      description:
        "Grow your money with deposit from IDR 10.000.000 up to IDR 100.000.000",
      buttonText: "Explore Sekarang",
      buttonLink: "#",
    },
  ];

  return (
    <Card title="Account" style={{ width: "100%", height: "100%" }}>
      <Meta
        title="Cash Account"
        description="For accepting or sending payment"
        style={{ paddingBottom: "16px" }}
      />

      <div style={{ gap: "16px", display: "flex", flexDirection: "column" }}>
        {cashAccountData.map((card, index) => (
          <CustomCard key={index} {...card} />
        ))}
      </div>

      <Divider />
      <Meta
        title="Earn Account"
        description="Access and manage your savings account here"
        style={{ paddingBottom: "16px" }}
      />

      <div style={{ gap: "16px", display: "flex", flexDirection: "column" }}>
        {earnAccountData.map((card, index) => (
          <CustomCard key={index} {...card} />
        ))}
      </div>

      <Divider />

      <Meta
        title="Loan Account"
        description="Access and manage your Loan here"
        style={{ paddingBottom: "16px" }}
      />

      <div style={{ gap: "16px", display: "flex", flexDirection: "column" }}>
        {cashAccountData.map((card, index) => (
          <CustomCard key={index} {...card} />
        ))}

        {flexPayData.map((card, index) => (
          <CustomCard key={index} {...card} showChevron={false} />
        ))}
      </div>
    </Card>
  );
};

export default AccountCards;
