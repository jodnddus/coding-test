/**
 * title: 우박수열 정적분
 * link: https://school.programmers.co.kr/learn/courses/30/lessons/134239
 * algorithm: math 
 */

solution(5, [[0,0],[0,-1],[2,-3],[3,-3]]);

function solution(k, ranges) {
    const result = [];

    const ubak = (k) => {
        let init = k, ubakNums = [k];

        while (init > 1) {
            if (init % 2 === 0) init = init / 2;
            else init = init * 3 + 1;
            
            ubakNums.push(init);
        }
    
        return ubakNums;
    }

    const u = ubak(k);
    const last = u.length-1;
    const acc = [0];

    for (let i=1; i<=last; i++) {
        acc[i] = acc[i-1] + (u[i-1] + u[i]) / 2
    }

    for (const range of ranges) {
        const [x1, x2] = [range[0], last + range[1]];

        if (x1 > x2) result.push(-1);
        else result.push(acc[x2] - acc[x1]);
    }

    return result;
}