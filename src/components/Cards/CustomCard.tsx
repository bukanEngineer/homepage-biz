import React, { MouseEvent } from "react";
import { Avatar, Button } from "antd";
import { RxChevronRight } from "react-icons/rx";
import styled from "@emotion/styled";

// Card inside Dashboard

interface CustomCardProps {
  link?: string;
  avatarSrc?: string;
  title?: string;
  bank?: string;
  accountType?: string;
  totalMoney?: string;
  buttonText?: string;
  buttonLink?: string;
  description?: string;
  showChevron?: boolean;
}

const CustomCard: React.FC<CustomCardProps> = ({
  link,
  avatarSrc,
  title,
  bank,
  accountType,
  totalMoney,
  buttonText,
  buttonLink,
  description,
  showChevron = true, // Default to true if not provided
}) => {
  const handleMouseOver = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.boxShadow = "0px 2px 4px 0px rgba(51, 51, 51, 0.16)";
  };

  const handleMouseOut = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.boxShadow = "none";
  };

  const CardContainer = styled.div`
    padding: 12px 16px;
    background-color: #f6f7f9;
    display: flex;
    border-radius: 8px;
    cursor: pointer;
    transition: box-shadow 0.3s;
    align-items: center;
    gap: 12px;
  `;

  const RightSection = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
  `;

  const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  `;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <CardContainer onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {avatarSrc && <Avatar src={avatarSrc} />}

        <LeftSection>
          {title && <span style={{ fontWeight: 700 }}>{title}</span>}
          {bank && <span>{bank}</span>}
          {description && <span>{description}</span>}
          {accountType && <span>{accountType}</span>}
        </LeftSection>

        <RightSection>
          {totalMoney && (
            <span style={{ fontWeight: 700, fontSize: 16 }}>{totalMoney}</span>
          )}
          {buttonText && buttonLink && (
            <Button
              type="link"
              href={buttonLink}
              style={{ padding: 0, alignItems: "center", display: "flex" }}
            >
              {buttonText}
            </Button>
          )}
          {showChevron && <RxChevronRight style={{ fontSize: 20 }} />}
        </RightSection>
      </CardContainer>
    </a>
  );
};

export default CustomCard;
