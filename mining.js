/**
 * title: 광물 캐기
 * link: https://school.programmers.co.kr/learn/courses/30/lessons/172927
 * algorithm: implement 
 */

solution([1, 3, 2], ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"]);
solution([0, 1, 1], ["diamond", "diamond", "diamond", "diamond", "diamond", "iron", "iron", "iron", "iron", "iron", "diamond"]);

function solution(picks, minerals) {
    let answer = 0;

    const picksSum = picks.reduce((acc, cur) => acc + cur, 0);
    const slicedMinerals = minerals.slice(0, picksSum * 5);
    const countedMinerals = slicedMinerals.reduce((acc, cur, idx) => {
        const index = Math.floor(idx / 5);

        if (!acc[index]) acc[index] = [0,0,0];

        if (cur == 'diamond') acc[index][0] += 1;
        else if (cur == 'iron') acc[index][1] += 1;
        else if (cur == 'stone') acc[index][2] += 1;

        return acc;
    }, []);

    const sortedMinerals = countedMinerals.sort((a, b) => b[0] - a[0] || b[1] - a[1]);

    for ([diamond, iron, stone] of sortedMinerals) {
        if (picks[0]) {
            answer += diamond + iron + stone;
            picks[0] -= 1;
        } else if (picks[1]) {
            answer += diamond * 5 + iron + stone;
            picks[1] -= 1;
        } else if (picks[2]) {
            answer += diamond * 25 + iron * 5 + stone; 
            picks[2] -= 1;
        }
    }

    return answer;
}