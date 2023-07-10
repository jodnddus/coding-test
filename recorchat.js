/**
 * title: 리코챗 로봇
 * link: https://school.programmers.co.kr/learn/courses/30/lessons/169199
 * algorithm: bfs
 */

console.log(solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]));
console.log(solution([".D.R", "....", ".G..", "...D"]));

function solution(board) {
    var answer = -1;

    const directionRow = [0, 0, 1, -1], directionColumn = [1, -1, 0, 0];
    const [rowLength, columnLength] = [board.length, board[0].length];

    const visited = Array.from({ length: rowLength }, () => Array(columnLength).fill(0));

    const bfs = (startRow, startColumn) => {
        visited[startRow][startColumn] = 1;
        const q = [[startRow, startColumn]];

        while (q.length) {
            const [r, c] = q.shift();

            for (let i=0; i<4; i++) {
                let currentRow = r, currentColumn = c;

                while (true) {
                    currentRow += directionRow[i];
                    currentColumn += directionColumn[i];

                    if (
                        currentRow < 0 || currentColumn < 0 ||
                        currentRow >= rowLength || currentColumn >= columnLength ||
                        board[currentRow][currentColumn] === 'D'
                    ) {
                        currentRow -= directionRow[i];
                        currentColumn -= directionColumn[i];
                        break;
                    }
                }

                if (!visited[currentRow][currentColumn]) {
                    visited[currentRow][currentColumn] = visited[r][c] + 1;
                    q.push([currentRow, currentColumn]);
                }
            
                if (board[currentRow][currentColumn] === 'G') return visited[currentRow][currentColumn] - 1;
            }
        } 
    
        return -1;
    }

    for (let i=0; i<rowLength; i++)
        for (let j=0; j<columnLength; j++)
            if (board[i][j] === 'R') answer = bfs(i, j);

    return answer;
}