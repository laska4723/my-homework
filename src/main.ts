type Gender = 'male' | 'female' | 'prefer_not_to_answer';

type GenderCode = 0 | 1 | 2;

type UserProfile = {
  gender: Gender;
  genderCode: GenderCode;
}

const user: UserProfile = {
  gender: 'male',
  genderCode: 0
}

console.log(user);