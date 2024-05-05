export type UserDataType = {
    userId: string;
    userName: string;
    userImg: string;
    age: number;
    contact: string;
    closeContacts: string[];
    coordinates: number[];
    data: DataType[];
};

export type DataType = {
    userId: string;
    userName: string;
};