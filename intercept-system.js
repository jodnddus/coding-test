/**
 * title: 요격 시스템
 * link: https://school.programmers.co.kr/learn/courses/30/lessons/181188
 */

const targets = [[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]];

const result = solution(targets);

console.log(result);

function solution(targets) {
    targets.sort((a, b) => b[0] - a[0]);

    let missile = 1;
    let checkPoint = targets[0][0];

    for (let i=1; i<targets.length; i++) {
        const [start, end] = targets[i];

        if (end <= checkPoint) {
            checkPoint = start;
            missile += 1;
        }
    }

    return missile;
}