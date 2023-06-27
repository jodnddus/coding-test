/**
 * title: no more undefined
 * link: https://toss.im/career/article/next-developer-2023-sample-questions
 */

const object1 = {
    repository: undefined,
};
const object2 = {
    repository: {
        readme: undefined,
    },
};
const object3 = {
    repository: {
        readme: {
            extension: 'md',
            content: '금융을 쉽고 간편하게',
        }
    }
};

function safelyGet(object, path) {
    const properties = path.split('.');
    let current = object;    

    for (const property of properties) {
        if (current === undefined) {
            return undefined;
        }
        current = current[property];
    }

    return current;
}

console.log(safelyGet(object1, 'repository.readme.extension'));
console.log(safelyGet(object1, 'repository.readme'));
console.log(safelyGet(object1, 'repository'));
console.log(safelyGet(object2, 'repository.readme.extension'));
console.log(safelyGet(object2, 'repository.readme'));
console.log(safelyGet(object2, 'repository'));
console.log(safelyGet(object3, 'repository.readme.extension'));
console.log(safelyGet(object3, 'repository.readme'));