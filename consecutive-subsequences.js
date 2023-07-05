/**
 * title: 연속된 부분 수열의 합
 * link: https://school.programmers.co.kr/learn/courses/30/lessons/178870
 * algorithm: two pointer 
 */

// solution([1, 2, 3, 4, 5], 7); // [2,3]
// solution([1, 1, 1, 2, 3, 4, 5], 5); // [6,6]
// solution([2, 2, 2, 2, 2], 6); // [0,2]

function solution(sequence, k) {
    let end = 0, answer = [0,0], interval = sequence.length, max_sum = 0;

    for (const start of Array.from({length: sequence.length}, (v,i) => i)) {
        while (max_sum < k && end < sequence.length) {
            max_sum += sequence[end]; 
            end += 1;
        } 

        if (max_sum == k && ((end-1) - start) < interval) {
            answer = [start, end-1];
            interval = (end-1) - start;
        }

        max_sum -= sequence[start]; 
    }

    return answer;
}