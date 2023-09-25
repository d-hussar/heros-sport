type EquipmentSlots = {
  primary: {
    legs?: string;
    breast?: string;
    shoulders?: string;
    hands?: string;
    head?: string;
    weapon?: string;
    shield?: string;
  };
  secondary: {
    shoulders?: string;
    hands?: string;
  };
};

export type EquipmentProps = {
  items: EquipmentSlots;
};
