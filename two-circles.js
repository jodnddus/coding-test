/**
 * title: 두 원 사이의 정수 쌍 
 * link: https://school.programmers.co.kr/learn/courses/30/lessons/181187
 * algorithm: math
 */

console.log(solution(2, 3));

function solution(r1, r2) {
    let answer = 0;

    for (let x=1; x<=r2; x++) {
        let maxY = Math.floor(Math.sqrt(r2**2 - x**2));
        let minY = r1>x ? Math.ceil(Math.sqrt(r1**2 - x**2)) : 0;

        answer += (maxY - minY + 1);
    }

    return answer * 4;
}