// 本脚本由 CursorBot 提供，用于创建目标目录和复制文件。来源：cursor.so
import fs from 'fs-extra';
import path from 'path';
import dayjs from 'dayjs';
import { num2En, num2MonthEn } from './constant';

const today = dayjs()
  .format('YY/M/D')
  .split('/')
  .map((item, index) => index === 1 ? num2MonthEn[item] : num2En[item])
  .join('/');
const srcDir = path.join(__dirname, '..', 'src', today);
const templateDir = path.join(__dirname, 'template');

fs.ensureDirSync(srcDir);

const files = fs.readdirSync(templateDir);

for (const file of files) {
  if (file === 'index.test.ts') {
    const content = fs.readFileSync(path.join(templateDir, file), 'utf8');
    const newContent = content.replace(/describe\('template'/g, `describe('${today.replace(/\//g, '-')}'`);
    fs.writeFileSync(path.join(srcDir, file), newContent);
  } else {
    fs.copySync(path.join(templateDir, file), path.join(srcDir, file));
  }
}

console.log(`template 代码创建成功！👌`);
