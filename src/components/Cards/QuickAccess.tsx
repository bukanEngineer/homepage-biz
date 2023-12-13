import { Card, Button, Flex } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

interface QuickAccessButtonProps {
  iconColor: string;
  label: string;
}

const QuickAccessButton: React.FC<QuickAccessButtonProps> = ({ iconColor, label }) => (
  <div style={{ flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
    <Button
      size="large"
      shape="circle"
      icon={<QuestionCircleOutlined style={{ color: iconColor }} />}
      style={{ border: '0' }}
    />
    <p>{label}</p>
  </div>
);

const QuickAccess: React.FC = () => {
  const buttonsData: QuickAccessButtonProps[] = [
    { label: 'Deposit', iconColor: '#0C45E1' },
    { label: 'Withdrawal', iconColor: '#0C45E1' },
    { label: 'Payout Form', iconColor: '#0C45E1' },
    { label: 'Payment Link', iconColor: '#0C45E1' },
    { label: 'Team Management', iconColor: '#0C45E1' },
  ];

  const rowButtons = buttonsData.slice(0, 3);
  const secondRowButtons = buttonsData.slice(3, 5);

  return (
    <Card title="Quick Access" style={{ width: '100%'  }}>
    <Flex gap="middle" style={{ justifyContent: "flex-start" }}>
      {rowButtons.map((button, index) => (
        <QuickAccessButton key={index} {...button} />
      ))}
      </Flex>

      <Flex gap="middle" style={{ justifyContent: 'flex-start', marginTop: '16px' }}>
        {secondRowButtons.map((button, index) => (
          <QuickAccessButton key={index} {...button} />
        ))}
      </Flex>

    </Card>
  );
};

export default QuickAccess;
