function solution(arr1, arr2) {
    let answer = new Array()

    for (let i = 0; i < arr1.length; i++) {
        let temp = new Array()
        for (let j = 0; j < arr1[i].length; j++) {
            temp.push(arr1[i][j] + arr2[i][j])
        }
        answer.push(temp)
    }

    return answer
}