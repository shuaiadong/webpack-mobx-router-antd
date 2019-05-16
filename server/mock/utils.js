const fs = require('fs');
const path = require('path');
const utils = {
    readFileSync (filePath) {
        return (req, res) => {
            const data = fs.readFileSync(path.resolve(__dirname, `./${filePath}`))
            const json = JSON.parse(data);
            return res.json(json)
        }
    },
    /**
     * api 读取js对象导出
     */
    readJs: (filePath) => {
        return (req, res) => {
            return res.json(require(filePath))
        }
    }
}

module.exports = utils