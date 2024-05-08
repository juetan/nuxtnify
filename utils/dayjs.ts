import _dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import localData from "dayjs/plugin/localeData";
import relativeTime from "dayjs/plugin/relativeTime";

declare module "dayjs" {
  interface Dayjs {
    _format: Dayjs["format"];
  }
}

/**
 * 中文语言包
 */
_dayjs.locale("zh-cn");

/**
 * 相对时间插件
 * @see https://dayjs.gitee.io/docs/zh-CN/plugin/relative-time
 */
_dayjs.extend(relativeTime);

/**
 * 本地化插件
 * @see https://dayjs.gitee.io/docs/zh-CN/plugin/locale-data
 */
_dayjs.extend(localData);

/**
 * 默认时间格式
 */
_dayjs.prototype.DATETIME = "YYYY-MM-DD HH:mm";

/**
 * 默认日期格式
 */
_dayjs.prototype.DATE = "YYYY-MM-DD";

/**
 * 默认时间格式
 */
_dayjs.prototype.TIME = "HH:mm:ss";

/**
 * 保留原方法
 */
_dayjs.prototype._format = _dayjs.prototype.format;

/**
 * 重写，设置默认时间格式
 */
_dayjs.prototype.format = function (format: string = _dayjs.prototype.DATETIME) {
  return this._format(format);
};

/**
 * [nuxnify] dayjs
 */
export const dayjs = _dayjs;
