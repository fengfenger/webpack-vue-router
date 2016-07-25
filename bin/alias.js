/**
 * Created by caoxifeng
 */

var path = require('path');
var containerPath = path.resolve('./');

//	别名
var alias = {
    views: path.resolve(containerPath, './src/views'),
    components: path.resolve(containerPath, './src/components'),
    rem: path.resolve(containerPath, './src/utils/rem')
};
