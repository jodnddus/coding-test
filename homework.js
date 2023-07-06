/**
 * title: 과제 진행하기 
 * link: https://school.programmers.co.kr/learn/courses/30/lessons/176962
 * algorithm: implement 
 */

// solution([["korean", "11:40", "30"], ["english", "12:10", "20"], ["math", "12:30", "40"]]);
// solution([["science", "12:40", "50"], ["music", "12:20", "40"], ["history", "14:00", "30"], ["computer", "12:30", "100"]]);
// solution([["aaa", "12:00", "20"], ["bbb", "12:10", "30"], ["ccc", "12:40", "10"]]);

function solution(plans) {
    const answer = [];
    
    const queue = plans 
        .map(item => {
            const [name, start, playtime] = item;
            const [hour, min] = start.split(":");

            return [
                name,
                Number(hour*60) + Number(min),
                Number(playtime),
            ]
        })
        .sort((a, b) => a[1] - b[1]);
    
    const first = queue.shift();
    let currentTime = first[1];

    const stack = [first];

    while (queue.length) {
        const plan = queue.shift();
        let timeDiff = plan[1] - currentTime;
        currentTime = plan[1];

        while (stack.length && timeDiff > 0) {
            let latestPlan = stack.pop();

            if (timeDiff >= latestPlan[2]) {
                answer.push(latestPlan[0]);
                timeDiff -= latestPlan[2]; 
            } else {
                latestPlan[2] -= timeDiff;
                timeDiff = 0;
                stack.push(latestPlan);
            }
        }

        stack.push(plan);
    }

    while (stack.length) {
        answer.push(stack.pop()[0]);
    }

    return answer;
}