/*
 * @Date: 2020-11-23 14:59:38
 * @LastEditors: sam
 * @LastEditTime: 2020-11-23 15:05:49
 * @FilePath: /chart-demo/demo/src/assets/utils/index.js
 */
export function getNow() {
  const dt = new Date();
  const y = dt.getFullYear();
  const mt = dt.getMonth() + 1;
  const day = dt.getDate();
  const h = dt.getHours(); // 获取时
  const m = dt.getMinutes(); // 获取分
  const s = dt.getSeconds(); // 获取秒
  return (
    y + "年" + mt + "月" + day + "日" + "-" + h + "时" + m + "分" + s + "秒"
  );
}
