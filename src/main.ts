import dayjs from 'dayjs';

console.log(`1 группа:
12. ${new Date('2024-08-23T12:30:00Z').toISOString()}
2. ${dayjs('2024-08-23T15:30:00+03:00').toISOString()}
5. ${dayjs('2024-08-24T01:30:00+13:00').toISOString()}
9. ${dayjs('2024-08-23T09:30:00-03:00').toISOString()}

2 группа:
3. ${new Date('2024-08-23T14:30:00Z').toISOString()}
11. ${dayjs('2024-08-24T02:30:00+12:00').toISOString()}
1. ${dayjs('2024-08-23T03:30:00-11:00').toISOString()}
7. ${dayjs('2024-08-23T10:30:00-04:00').toISOString()}

3 группа:
4. ${new Date('2024-08-23T15:30:00Z').toISOString()}
6. ${dayjs('2024-08-23T17:30:00+02:00').toISOString()}
8. ${dayjs('2024-08-23T03:30:00-12:00').toISOString()}
10. ${dayjs('2024-08-23T14:30:00-01:00').toISOString()}`);