export interface ValidationReturnType {
  valid: boolean;
  errorMessage: string;
  formattedPhoneNumber?: string;
}

export const validateTeamName = (value: string): ValidationReturnType => {
  const validationName = /^[а-яА-Яa-zA-Z\s]+$/.test(value);
  if (!validationName) {
    return {
      valid: false,
      errorMessage: 'Недопустимые символы',
    };
  }
  return {
    valid: true,
    errorMessage: '',
  };
};

export const validateNumPeople = (value: string): ValidationReturnType => {
  const numPeople = parseInt(value, 10);
  if (isNaN(numPeople) || numPeople < 2 || numPeople > 10) {
    return {
      valid: false,
      errorMessage: 'Количество человек в команде должно быть от 2 до 10',
    };
  }
  return {
    valid: true,
    errorMessage: '',
  };
};
export const validateTelNumber = (value: string): ValidationReturnType => {
  const phoneNumber = value.replace(/[^\d]/g, '');

  const phoneCheckNumber = /[0-9]/.test(value);
  const phoneCheck = /^((8|\+7)[-]?)?(\(?\d{3}\)?[-]?)?[\d\- ]{7,10}$/.test(value);

  if (!phoneCheckNumber) {
    return {
      valid: false,
      errorMessage: 'Вводите только цифры',
    };
  }
  if (value.length < 11) {
    return {
      valid: false,
      errorMessage: 'Номер слишком короткий',
    };
  }
  let formattedPhoneNumber = '+7(';
  if (phoneNumber.length >= 1) {
    if (phoneNumber.slice(1, 4) !== '') {
      formattedPhoneNumber += `${phoneNumber.slice(1, 4)}`;
    }
  }
  if (phoneNumber.length >= 4) {
    if (phoneNumber.slice(4, 7) !== '') {
      formattedPhoneNumber += `) ${phoneNumber.slice(4, 7)}`;
    }
  }

  if (phoneNumber.length >= 7) {
    if (phoneNumber.slice(7, 9) !== '') {
      formattedPhoneNumber += ` ${phoneNumber.slice(7, 9)}`;
    }
  }
  if (phoneNumber.length >= 9) {
    if (phoneNumber.slice(9, 11) !== '') {
      formattedPhoneNumber += ` ${phoneNumber.slice(9, 11)}`;
    }
  }
  return {
    valid: true,
    errorMessage: '',
    formattedPhoneNumber,
  };
};

export const validateSocialMediaPage = (value: string): ValidationReturnType => {
  const valid = /^(ftp|http|https):\/\/[^ "]+$/.test(value);
  if (!valid && value) {
    return {
      valid: false,
      errorMessage: 'Вставьте ссылку или оставьте пустым',
    };
  }
  return {
    valid: true,
    errorMessage: '',
  };
};

export const validateBirthday = (value: string): ValidationReturnType => {
  const today = new Date();
  const selectedDate = new Date(value);
  const age = today.getFullYear() - selectedDate.getFullYear();
  if (isNaN(selectedDate.getTime()) || age > 120 || age < 16) {
    return {
      valid: false,
      errorMessage: 'Игра от 16 лет',
    };
  }
  return {
    valid: true,
    errorMessage: '',
  };
};
