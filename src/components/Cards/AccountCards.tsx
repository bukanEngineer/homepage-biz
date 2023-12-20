import React from "react";
import { Card, Divider } from "antd";
import CustomCard from "./CustomCard";
import styled from "@emotion/styled";

const { Meta } = Card;

const cashAccountData = [
  {
    link: "https://www.youtube.com/",
    avatarSrc: "https://www.worldometers.info/img/flags/id-flag.gif",
    title: "Abel Account",
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
    showChevron: false,
    buttonText: "Open Earn Deposit",
    buttonLink: "#",
  },
];

const flexPayData = [
  {
    link: "#",
    title: "Flexpay",
    description:
      "Take control of your credit with ease! and track your repayment progress in one convenient place.",
    buttonText: "Explore Now",
    buttonLink: "#",
  },
];

const sectionsData = [
  {
    title: "Cash Account",
    description: "For accepting or sending payment",
    data: cashAccountData,
  },
  {
    title: "Earn Account",
    description: "Access and manage your savings account here",
    data: earnAccountData,
  },
  {
    title: "Loan Account",
    description: "Access and manage your Loan here",
    data: [
      ...cashAccountData,
      ...flexPayData.map((card) => ({ ...card, showChevron: false })),
    ],
  },
];

// Account Section Styling
const MetaStyled = styled(Meta)`
  padding-bottom: 1rem;
`;

const SectionLayout = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

// Define Account Section like Cash Account, Earn Account, Loan Account etc

const AccountSection: React.FC<{
  title: string;
  description: string;
  data: any[];
  isLast: boolean;
}> = ({ title, description, data, isLast }) => (
  <>
    <MetaStyled
      title={title}
      description={description}
      style={{ paddingBottom: 16 }}
    />

    <SectionLayout>
      {data.map((card, index) => (
        <CustomCard key={index} {...card} />
      ))}
    </SectionLayout>

    {!isLast && <Divider />}
  </>
);

// Define card inside each section

const AccountCards: React.FC = () => {
  return (
    <Card title="Account">
      {sectionsData.map((section, index) => (
        <AccountSection
          key={index}
          {...section}
          isLast={index === sectionsData.length - 1}
        />
      ))}
    </Card>
  );
};

export default AccountCards;
