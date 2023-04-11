// 本脚本由 CursorBot 提供，用于创建目标目录和复制文件。来源：cursor.so
import fs from 'fs-extra';
import path from 'path';
import dayjs from 'dayjs';
import { num2En, num2MonthEn } from './constant';

const today = dayjs()
    .format('YY/M/D')
    .split('/')
    .map((item, index) => index === 1 ? num2MonthEn[item] : num2En[item])

const srcDir = path.join(__dirname, '..', 'src', today.slice(0, 2).join('/'));
const templateDir = path.join(__dirname, 'template-rs');

fs.ensureDirSync(srcDir);

fs.copySync(path.join(templateDir, 'index.rs'), path.join(srcDir, today.at(-1) + '.rs'));

console.log(`template-rs 代码创建成功！👌`);
