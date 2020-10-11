import { keyProfile } from 'constants/localStorage';

// проверить и получить по ключу
const localData =
  typeof window !== 'undefined' && window
    ? JSON.parse(localStorage.getItem(keyProfile))
    : null;

// проверить на пустоту хранилище
export const isEmptyLocalStorage = () => {
  return !localData;
};

// положить данные в хранилище
export const setByLocalStorage = (data) => {
  if (!data) return false;
  localStorage.setItem(keyProfile, JSON.stringify(data));
  return true;
};

// получить данные с хранилища
export const getByLocalStorage = () => {
  if (isEmptyLocalStorage()) return false;
  return localData;
};
