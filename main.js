const value = 'admin';

switch (value) {
    case 'user':
    case 'client':
        result = "1 Уровень";
        break;

    case 'admin':
    case 'manager':
        result = "2 Уровень";
        break;

    case 'superadmin':
        result = "3 Уровень";
        break;
}

console.log(result);