const source = 'the quick brown fox jumps over the lazy dog';
const custom = 'oak lgypb wited zts qgfch tuki oak mjrn xtv';
const converted = 'ntg ajuk fjbydv vikjo citvikhh yd mkjidydv qjujhpiyco. ptdvijoh!';

let result = '';
for (const char of converted) {
    result += source[custom.indexOf(char)] ?? char;
}
console.log(result);