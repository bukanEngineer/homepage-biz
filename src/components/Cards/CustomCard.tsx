import React, { MouseEvent } from "react";
import { Avatar, Button } from "antd";
import { RxChevronRight } from "react-icons/rx";

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

  return (
    <a href={link} style={{ textDecoration: "none", color: "inherit" }}>
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
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {avatarSrc && <Avatar src={avatarSrc} />}

        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          {title && <span style={{ fontWeight: 700 }}>{title}</span>}
          {bank && <span>{bank}</span>}
          {description && <span>{description}</span>}
          {accountType && <span>{accountType}</span>}
          
        </div>

        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {totalMoney && <span style={{ fontWeight: 700, fontSize: 16 }}>{totalMoney}</span>}
          {buttonText && buttonLink && (
            <Button type="link" href={buttonLink} style={{width: "100%"}}>
              {buttonText}
            </Button>
          )}
          {showChevron && <RxChevronRight style={{ fontSize: 20 }} />}
        </div>
      </div>
    </a>
  );
};

export default CustomCard;
