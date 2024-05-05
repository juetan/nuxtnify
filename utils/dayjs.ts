import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import localData from "dayjs/plugin/localeData";
import relativeTime from "dayjs/plugin/relativeTime";

declare module "dayjs" {
  interface Dayjs {
    DATETIME: "YYYY-MM-DD HH:mm";
    DATE: "YYYY-MM-DD";
    TIME: "HH:mm:ss";
    _format: Dayjs["format"];
  }
}

/**
 * 中文语言包
 */
dayjs.locale("zh-cn");

/**
 * 相对时间插件
 * @see https://dayjs.gitee.io/docs/zh-CN/plugin/relative-time
 */
dayjs.extend(relativeTime);

/**
 * 本地化插件
 * @see https://dayjs.gitee.io/docs/zh-CN/plugin/locale-data
 */
dayjs.extend(localData);

/**
 * 默认时间格式
 */
dayjs.prototype.DATETIME = "YYYY-MM-DD HH:mm";

/**
 * 默认日期格式
 */
dayjs.prototype.DATE = "YYYY-MM-DD";

/**
 * 默认时间格式
 */
dayjs.prototype.TIME = "HH:mm:ss";

/**
 * 保留原方法
 */
dayjs.prototype._format = dayjs.prototype.format;

/**
 * 重写，设置默认时间格式
 */
dayjs.prototype.format = function (format: string = dayjs.prototype.DATETIME) {
  return this._format(format);
};

export { dayjs };

