type Gender = 'male' | 'female' | 'prefer_not_to_answer';

type GenderCode = 0 | 1 | 2;

type UserProfile = {
  gender: Gender;
  genderCode: GenderCode;
  createdAt: Date;
  createdAtISO: string
}

const now = new Date();

const user: UserProfile = {
  gender: 'male',
  genderCode: 0,
  createdAt: now,
  createdAtISO: now.toISOString()
}

console.log(user);