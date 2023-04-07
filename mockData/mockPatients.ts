export type Patient = {
  name: string;
  dob: number;
  country: string;
  priority?: number | string | any;
  photos?: string | any;
};

export const mockPatients: Patient[] = [
  {
    name: "John",
    dob: 32,
    country: "Ireland",
    priority: 95,
    photos: "click to view",
  },
  {
    name: "Mary",
    dob: 31,
    country: "France",
    priority: 70,
    photos: "click to view",
  },
  {
    name: "Stephen",
    dob: 22,
    country: "Mexico",
    priority: 35,
    photos: "click to view",
  },
];
