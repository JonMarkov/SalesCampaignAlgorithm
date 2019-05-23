// 奖池钱数：drqs，排位数组：sz
console.log(this.numFn(drqs, sz))
numFn(sjs,diws){
// 参与人数
    let zrs = (diws.length) + 1
    var moneyList = []
    for(let i in diws){
// 金额总数
        let jgzs = zrs * sjs
// 总份数
        let zfs = zrs * zrs
// 中和份数
        let zhs = zfs / (zrs / 2)
// 每一份金额
        let dfjg = jgzs / zfs
// 每一份金额
        let myfjg = sjs / zrs
// 一共多少份
        let gdsf = sjs * zrs / myfjg
// 当前查询位数和第几位对应
        let dywz = zrs - diws[i]
// 当前位数拿的钱数
        let mome = (zhs - (zhs / zrs) * diws[i]) * myfjg
// 保留小数点
        let money = mome.toFixed(2)
        moneyList.push(money)
    }
    return moneyList
},
