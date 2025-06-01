const user = {
    name: 'Alex',
    nickname: 'Alexxx675',
    nicknameHistory: ['AlexLuk', 'Xela-123', 'Sasha 8'],
};

user.nicknameHistory.push(user.nickname);
user.nickname = 'bmw-e39';

console.log(user);