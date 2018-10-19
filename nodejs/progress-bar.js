/**
 * File:        progress-bar.js
 * Author:      Liangliang Wang
 * Date:        2018-10-19
 * Copyright:   2018 2020 willfox@126.com
 * Description: 进度条渲染
 * Usage:
 *      var ProgressBar = require("./progress-bar")
 */


var slog = require('single-line-log').stdout;

function ProgressBar(desc, bar_length){
    this.desc = desc || "Progress";
    this.bar_length = bar_length || 25;

    this.render = function(completed, total){
        var percent = (completed / total).toFixed(4);
        var cell_num = Math.floor(percent * this.bar_length);

        var cell = "";
        for(var i = 0; i < cell_num; i++){
            cell += "█";
        }
        
        var empty = ""
        for(var i = 0; i < this.bar_length - cell_num; i++){
            empty += "░";
        }

        var cmdText = this.desc + ': ' + (100*percent).toFixed(2) + '% ' + cell + empty;

        slog(cmdText);
    };
}

module.exports = ProgressBar;