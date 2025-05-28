const value = 'moderation';

switch (value) {
    case 'approved':
        result = "approved";
        break;

    case 'pending':
    case 'moderation':
    case 'waiting':
        result = "pending";
        break;

    case 'declined':
    case 'rejected':
    case 'notaccepted':
        result = "declined";
        break;

    default:
        result = "pending";
        break;
}

console.log(result);