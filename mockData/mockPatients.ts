export type Patient = {
  id?: number;
  firstName: string;
  lastName: string;
  dob: number;
  country: string;
  priority?: number | string | any;
  photos?: string | any;
};

export const mockPatients: Patient[] = [
  {
    firstName: "John",
    lastName: "O'Toole",
    dob: 32,
    country: "Ireland",
    priority: 95,
    photos: "click to view",
  },
  {
    firstName: "Mary",
    lastName: "Higgins",
    dob: 31,
    country: "France",
    priority: 70,
    photos: "click to view",
  },
  {
    firstName: "Stephen",
    lastName: "Ramirez",
    dob: 22,
    country: "Mexico",
    priority: 35,
    photos: "click to view",
  },
];
