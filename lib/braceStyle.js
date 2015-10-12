/**
 * @file 修改else换行问题
 * @author huanghuiquan (huanghuiquan@baidu.com)
 */

var re = /^([ \t]*)\}\s*((?:else|catch)[^{]*\s*\{.*\n)/gm;

module.exports = function (str) {
    return str.replace(re, function (match, p1, p2) {
        return p1 + '}\n' + p1 + p2;
    });
}
