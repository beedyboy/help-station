type ServiceLayoutProps = {
  children: React.ReactNode;
  bgColor: string;
};

const ServiceLayout: React.FC<ServiceLayoutProps> = ({ children, bgColor }) => {
  return (
    <div className={`bg-${bgColor} rounded-lg overflow-hidden`}>
      {children}
    </div>
  );
};

export default ServiceLayout;
