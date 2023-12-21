import React, { MouseEvent } from "react";
import { Avatar, Button, Flex } from "antd";
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

  const StyledCardInside = styled(Flex)`
    padding: 0.75rem 1rem;
    background-color: #f6f7f9;
    border-radius: 8px;
    cursor: pointer;
    transition: box-shadow 0.3s;
  `;

  const RightSection = styled.div`
    display: flex;
    gap: 0, 5rem;
    align-items: center;
  `;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <StyledCardInside
        gap={8}
        align="center"
        justify="space-between"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Flex align="center" gap={8}>
          <div>{avatarSrc && <Avatar src={avatarSrc} />}</div>

          <Flex vertical>
            {title && <p style={{ fontWeight: 700 }}>{title}</p>}
            {bank && (
              <p
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {bank}
              </p>
            )}
            {description && <p>{description}</p>}
            {accountType && <p>{accountType}</p>}
          </Flex>
        </Flex>

        <RightSection>
          {totalMoney && (
            <p
              style={{
                fontWeight: 700,
                fontSize: 16,
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {totalMoney}
            </p>
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
      </StyledCardInside>
    </a>
  );
};

export default CustomCard;
