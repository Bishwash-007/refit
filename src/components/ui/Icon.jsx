import * as LucideIcons from "lucide-react";

const IconComponent = ({ name, ...props }) => {
  const Icon = LucideIcons[name];

  if (!Icon) {
    console.warn(`Icon "${name}" does not exist in lucide-react`);
    return null;
  }

  return <Icon {...props} />;
};

export default IconComponent;