export interface TabletSelectModel {
  label: string;
  value: string;
}

export interface ComputedOptionsTypes extends TabletSelectModel {
  isActive: boolean;
}
