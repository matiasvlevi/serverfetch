"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initStream = void 0;
const fs = __importStar(require("fs"));
const index_1 = __importDefault(require("../index"));
function initStream() {
    let path = this.genFullPath();
    let header = [];
    let csv = [];
    if (!fs.existsSync(path)) {
        return {
            header,
            csv
        };
    }
    else {
        let file = fs.readFileSync(path, 'utf8');
        let lines = file.split('\n');
        header = lines.splice(0, 1)[0].split(',');
        csv = lines.map(x => x.split(',').map(y => y.replace('\r', '')));
        let valid = index_1.default.checkLength(csv, this.getNbCol());
        if (!valid) {
            index_1.default.error('File tried loading a csv with some missing values');
            return {
                header: [],
                csv: []
            };
        }
        return {
            header,
            csv
        };
    }
}
exports.initStream = initStream;
