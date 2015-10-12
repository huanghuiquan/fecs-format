#!/usr/bin/env node

/**
 * @file fecs helper tool
 * @author huanghuiquan (huanghuiquan@baidu.com)
 */

var fs = require('fs-extra');
require('stream-map');

var braceStyle = require('./lib/braceStyle');

var baseDir = process.cwd();

// 匹配fecs检测到的文件
var re = /\s((?:[\w]+\/?)*.js)\s/gm;

process.stdin.map(function (buff) {
    var str = buff.toString('utf-8');
    var matches;
    var file;
    while(matches = re.exec(str)) {
        file = matches[1];
        console.info('FIXED: ' + file);
        fs.createReadStream(baseDir + '/' + file, {encoding: 'utf-8'})
            .map(function (buff) {
                var str = buff.toString('utf-8');
                return braceStyle(str);
            })
            .pipe(fs.createOutputStream(baseDir + '/output/' + file, {encoding: 'utf-8'}));
    }
});


